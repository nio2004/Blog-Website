import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Singleblog from '../hooks/singleblog';


const Blogdetail = (props) => {
    // console.log(req.params)
    const [imagePreview, setImagePreview] = useState('');
    let blog = ""
    
    
    const  {blogid}  = useParams();
    console.log("test1",blogid)
    const fetchblogbyid = async() => {
        // const response = await fetch('/blog/detail/'+blogid)
        // console.log("test")
        // blog = await response.json()
        // console.log(blog.image)
      //   const imagePreviewUrl = URL.createObjectURL(json.blogimage);
      // setImagePreview(imagePreviewUrl);
      const blog = await Singleblog(blogid)
      console.log("test")
      // console.log(blog[0].image)
      // const final = (blog[0].image).replace('3000','4000')
      setImagePreview(blog[0].image)
      console.log(blog[0].image)
    }
    
   useEffect(()=> {
    // Blogarea(true)
    fetchblogbyid()
   },[]) 

  return (
    <div>
        {/* <!-- ======= Blog Page ======= -->  */}    
        <div className="blog-page area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="page-head-blog">
              <div className="single-blog-page">    
                    {/* <!-- search option start -->  */}    
                    <form action="#">
                  <div className="search-option">
                    <input type="text" placeholder="Search..." />
                    <button className="button" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>    
                    {/* <!-- search option end -->  */}    
                  </div>
              <div className="single-blog-page">    
                    {/* <!-- recent start -->  */}    
                    <div className="left-blog">
                  <h4>recent post</h4>
                  <div className="recent-post">    
                        {/* <!-- start single post -->  */}    
                        <div className="recent-single-post">
                      <div className="post-img">
                        <a href="#">
                          <img src="assets/img/blog/1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="pst-content">
                        <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                      </div>
                    </div>
                        {/* <!-- End single post -->  */}    
                        </div>    
                    </div>     
                    {/* <!-- recent end -->  */}    
                  </div>
              <div className="single-blog-page">
                <div className="left-blog">
                  <h4>categories</h4>
                  <ul>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Project</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">wordpress</a>
                    </li>
                    <li>
                      <a href="#">Joomla</a>
                    </li>
                    <li>
                      <a href="#">Html</a>
                    </li>
                    <li>
                      <a href="#">Website</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-blog-page">
                <div className="left-blog">
                  <h4>archive</h4>
                  <ul>
                    <li>
                      <a href="#">07 July 2016</a>
                    </li>
                    <li>
                      <a href="#">29 June 2016</a>
                    </li>
                    <li>
                      <a href="#">13 May 2016</a>
                    </li>
                    <li>
                      <a href="#">20 March 2016</a>
                    </li>
                    <li>
                      <a href="#">09 Fabruary 2016</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-blog-page">
                <div className="left-tags blog-tags">
                  <div className="popular-tag left-side-tags left-blog">
                    <h4>popular tags</h4>
                    <ul>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Project</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">wordpress</a>
                      </li>
                      <li>
                        <a href="#">Joomla</a>
                      </li>
                      <li>
                        <a href="#">Html</a>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                      </li>
                      <li>
                        <a href="#">Website</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>    
              </div>
              {/* <!-- End left sidebar -->  */}
          {/* <!-- Start single blog -->  */}    
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                    {/* <!-- single-blog start -->  */}    
                <article className="blog-post-wrapper">
                  <div className="post-thumbnail">
                        {/* <img src="assets/img/blog/6.jpg" alt="" />      */}
                        
                        {imagePreview && (
                          <img src={imagePreview} alt="Uploaded Preview" className="uploaded-image" />
                        )}
                    <img src="assets/img/blog/6.jpg" alt="" />
                  </div>
                  <div className="post-information">
                    <h2>Blog image post layout</h2>
                    <div className="entry-meta">
                      <span className="author-meta"><i className="bi bi-person"></i> <a href="#">admin</a></span>
                      <span><i className="bi bi-clock"></i> march 28, 2016</span>
                      <span className="tag-meta">
                        <i className="bi bi-folder"></i>
                        <a href="#">painting</a>,
                        <a href="#">work</a>
                      </span>
                      <span>
                        <i className="bi bi-tags"></i>
                        <a href="#">tools</a>,
                        <a href="#"> Humer</a>,
                        <a href="#">House</a>
                      </span>
                      <span><i className="bi bi-chat"></i> <a href="#">6 comments</a></span>
                    </div>
                    <div className="entry-content">
                      <p>Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris eu dui ut lectus fermentum eleifend. Pellentesque faucibus sem ante, non malesuada odio varius nec. Suspendisse
                        potenti. Proin consectetur aliquam odio nec fringilla. Sed interdum at justo in efficitur. Vivamus gravida volutpat sodales. Fusce ornare sit amet ligula condimentum sagittis.</p>
                      <blockquote>
                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum
                          tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                      </blockquote>
                      <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum.
                        Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae
                        lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                    </div>
                  </div>
                </article>
                <div className="clear"></div>
                <div className="single-post-comments">
                  <div className="comments-area">
                    <div className="comments-heading">
                      <h3>6 comments</h3>
                    </div>
                    <div className="comments-list">
                      <ul>
                        <li className="threaded-comments">
                          <div className="comments-details">
                            <div className="comments-list-img">
                              <img src="assets/img/blog/b02.jpg" alt="post-author" />
                            </div>
                            <div className="comments-content-wrap">
                              <span>
                                <b><a href="#">demo</a></b>
                                Post author
                                <span className="post-time">October 6, 2014 at 4:25 pm</span>
                                <a href="#">Reply</a>
                              </span>
                              <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="comments-details">
                            <div className="comments-list-img">
                              <img src="assets/img/blog/b02.jpg" alt="post-author" />
                            </div>
                            <div className="comments-content-wrap">
                              <span>
                                <b><a href="#">admin</a></b>
                                Post author
                                <span className="post-time">October 6, 2014 at 6:18 pm </span>
                                <a href="#">Reply</a>
                              </span>
                              <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec</p>
                            </div>
                          </div>
                        </li>
                        <li className="threaded-comments">
                          <div className="comments-details">
                            <div className="comments-list-img">
                              <img src="assets/img/blog/b02.jpg" alt="post-author" />
                            </div>
                            <div className="comments-content-wrap">
                              <span>
                                <b><a href="#">demo</a></b>
                                Post author
                                <span className="post-time">October 6, 2014 at 7:25 pm</span>
                                <a href="#">Reply</a>
                              </span>
                              <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply </h3>
                    <span className="email-notes">Your email address will not be published. Required fields are marked *</span>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <p>Name *</p>
                          <input type="text" />
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <p>Email *</p>
                          <input type="email" />
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <p>Website</p>
                          <input type="text" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 comment-form-comment">
                          <p>Website</p>
                          <textarea id="message-box" cols="30" rows="10"></textarea>
                          <input type="submit" value="Post Comment" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                    {/* <!-- single-blog end -->  */}    
              </div>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
    // </div>
  )
}

export default Blogdetail
