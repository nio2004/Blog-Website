import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
const moment = require('moment')


const Mypost = () => {
  const [blog,setblog] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
      });
      const [imagePreview, setImagePreview] = useState('');

      const handleInputChange = (event) => {
        const { name, value, type, files } = event.target;
        // console.log(typeof(files[0]))
        // Handle the file input separately
        if (type === 'file') {
          const selectedImage = files[0];
          //console.log(selectedImage)
    
          
          const imagePreviewUrl = URL.createObjectURL(selectedImage);
          console.log("test",imagePreviewUrl)
          setImagePreview(imagePreviewUrl);
          setFormData({
            ...formData,
            [name]: imagePreview,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(formData)
        const response = await fetch('/blog', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
        if(response.ok){
          console.log('Submitted Data:', formData);
        }else{
          console.log(json.error)
        }
        
      };
    
      const handleCancel = () => {
        setFormData({
          title: '',
        description: '',
        image: null,
        });
        console.log('Cancelled');
      };

      const fetchblogbyid= async(id) => {
        try {
          const response = await fetch('/blog/'+id);
          if (response.ok) {
            const data = await response.json();
            //console.log(data)
            setblog(data); 
          } else {
            console.error('Failed to fetch blogs:', response.status);
          }
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      } 
    
      useEffect( ()=> {
        fetchblogbyid("12345")
      },[])  

      const deletebyid = async(id) => {
        const response = await fetch('/blog/' + id, {
          method: 'DELETE'
        })
        if(response.ok()){
          console.log("deleted")
        }else{
          console.log("error")
        }
      }

  return (
    <div>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
      
      <div className="form-group">
        <label htmlFor="image">Image -</label>
        <input
          type="file"
          className="form-control-file ms-2"
          name="image"
          accept="image/*" 
          onChange={handleInputChange}
        />
      </div>

      {imagePreview && (
        <div className="form-group">
          <img src={imagePreview} alt="Uploaded Preview" className="uploaded-image" />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="title">
          Title <span className="require">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          rows="5"
          className="form-control"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <p>
          <span className="require">*</span> - required fields
        </p>
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-dark">
          Create
        </button>
        <button type="button" className="btn btn-default" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
    <hr />

    {blog.map((item) => (
        <div key={item._id}>
          <div className="single-blog">
            <div className="single-blog-img">
              <a href="blog-details.html">
                <img src="assets/img/blog/1.jpg" alt="" />
                {/* <img src={item.image} alt="" /> */}
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
            <span>
              <a href="blog-details.html" className="ready-btn">Read more</a>
            </span>
            <span
              className="material-symbols-outlined ml-auto"
              style={{ cursor: 'pointer',marginLeft:'70%' }} 
              onClick={() => deletebyid(item._id)} 
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
        </div>
      </div>
      ))}   

    </div>
  )
}

export default Mypost
