import React from 'react'
import { useParams } from 'react-router-dom';

const Singleblog = async(blogid) => {
  // const {blogid} = useParams();
    try {
      console.log("test2",{blogid})
      const response = await fetch('http://localhost:4000/blog/detail/' + blogid);      
      const json = await response.json()
      console.log("singleblog")
      console.log(json)
      return (json)
    } catch (error) {
      console.log(error)
    }
    
  return null;
  
}

export default Singleblog
