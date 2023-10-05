import React from 'react'

const blogsidebar = () => {
  return (
    <div className="col-lg-4 col-md-4">
            <div className="page-head-blog">
              <div className="single-blog-page">
                {/*<!-- search option start -->*/}
                <form action="#">
                <div className="search-option">
                <input type="text" placeholder="Search..." />
                <button className="button" type="submit">
                    <i className="bi bi-search"></i>
                </button>
                </div>
            </form>
            {/*<!-- search option end -->*/}
            </div>
            <div className="single-blog-page">
            {/*<!-- recent start -->*/}
            <div className="left-blog">
                <h4>recent post</h4>
                <div className="recent-post">
                {/*<!-- start single post -->*/}
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
                {/*<!-- End single post -->*/}
                {/*<!-- start single post -->*/}
                <div className="recent-single-post">
                    <div className="post-img">
                    <a href="#">
                        <img src="assets/img/blog/2.jpg" alt="" />
                    </a>
                    </div>
                    <div className="pst-content">
                    <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                    </div>
                </div>
                {/*<!-- End single post -->*/}
                {/*<!-- start single post -->*/}
                <div className="recent-single-post">
                    <div className="post-img">
                    <a href="#">
                        <img src="assets/img/blog/3.jpg" alt="" />
                    </a>
                    </div>
                    <div className="pst-content">
                    <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                    </div>
                </div>
                {/*<!-- End single post -->*/}
                {/*<!-- start single post -->*/}
                <div className="recent-single-post">
                    <div className="post-img">
                    <a href="#">
                        <img src="assets/img/blog/4.jpg" alt="" />
                    </a>
                    </div>
                    <div className="pst-content">
                    <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                    </div>
                </div>
                {/*<!-- End single post -->*/}
                </div>
            </div>
            {/*<!-- recent end -->*/}
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
                    <a href="#">Website</a>
                    </li>
                    <li>
                    <a href="#">Joomla</a>
                    </li>
                    <li>
                    <a href="#">Html</a>
                    </li>
                    <li>
                    <a href="#">wordpress</a>
                    </li>
                    <li>
                    <a href="#">Masonry</a>
                    </li>
                </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default blogsidebar
