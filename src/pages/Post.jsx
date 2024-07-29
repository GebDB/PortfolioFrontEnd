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
      axios.get(`https://portfoliodb-danielsportfolio.d.aivencloud.com:20254/posts/byId/${id}`).then((response) => {
        setPostObject(response.data);
        console.log(postObject.imageURL);
      });
    });
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