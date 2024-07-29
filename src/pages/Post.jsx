import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import DOMPurify from 'dompurify';
import './Post.css'; 

function Post() { // change to implement the image article once.
    let { id } = useParams();
    const [ postObject, setPostObject] = useState({});
    const clean = DOMPurify.sanitize(postObject.postText);

    useEffect(() => {
      axios.get(`https://danielbecirevic-d8ac0bfad92e.herokuapp.com/posts/byId/${id}`).then((response) => {
        setPostObject(response.data);
        console.log(postObject.imageURL);
      });
    },[id]);
    return (
      <div className="article">
        <div className="articleContainer">
          <h1 className="title"> {postObject.title} </h1>
          <div className="imageContainer">
            <img className="articleImage" src={postObject.imageURL} alt={postObject.imageALT}/> 
          </div> 
          <div className="articleContent" dangerouslySetInnerHTML={{ __html: clean }} />
        </div>
       </div>


  )
}
export default Post;