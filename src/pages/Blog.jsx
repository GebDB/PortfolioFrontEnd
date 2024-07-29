import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'; 

function Blog() {
  const [posts, setPosts] = useState([]); 
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("https://portfoliodb-danielsportfolio.d.aivencloud.com:20254/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      }); 
  }, []);

  return (
    <div className="posts">
      {posts.map((value, index) => { 
        return (
          <div 
            className="post" 
            onClick={() => { navigate(`/blog/post/${value.id}`) }} 
            key={index}> 
            <div className="cardImageContainer"><img className="cardImage" src={value.imageURL}/></div>
            <h3 className="cardTitle">{value.title}</h3>
            <div className="previewContainer"><p className="cardPreview">{value.previewText}</p></div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;