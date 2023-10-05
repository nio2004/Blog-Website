import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import { Routes, Route } from 'react-router-dom';
import Blogdetail from "../blogdetail";
import Blogarea from "../blogarea";
const moment = require('moment')

const Blogthumbnail = () => {

  const [blog,setblog] = useState([]);
  
  const fetchblogs= async() => {
    try {
      const response = await fetch('/blog');
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setblog(data); // Update the blog state with fetched data
      } else {
        console.error('Failed to fetch blogs:', response.status);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  } 

  useEffect( ()=> {
    fetchblogs()
  },[])

  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      {blog.map((item) => (
        
        <div key={item._id}>
          <div className="single-blog">
            <div className="single-blog-img">
              <a href="blog-details.html">
                {/* <img src="assets/img/blog/1.jpg" alt="" /> */}
                <img src={item.image} alt="" />
              </a>
            </div>
            <div className="blog-meta">
              <span className="comments-type">
                <i className="bi bi-chat"></i>
                <a href="#">{item.comments.length}</a>
              </span>
              <span className="date-type">
                <i className="bi bi-calendar"></i>{ moment(item.createdAt).format('YYYY-MM-DD / HH:mm:ss')}
              </span>
            </div>
            <div className="blog-text">
              <h4>
                <a href="#">{item.title}</a>
              </h4>
              {/* <p>
                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
              </p> */}
              <p>{item.description}</p>
            </div>
            <Link to={`/blog/details/${item._id}`}>
            <span>
              <p className="ready-btn" >Read more</p>
            </span>
            </Link>
            
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default Blogthumbnail
