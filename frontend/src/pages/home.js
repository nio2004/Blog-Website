import Blogsidebar from "./../components/blogsidebar";
import Blogarea from "../components/blogarea";

const Home = () => {

    return(
        <div className='home'>
          <div className="blog-page area-padding">
          <div className="container">
          <div className="row">

          <Blogsidebar />
                
          {/*<!-- End left sidebar -->*/}
          {/*<!-- Start single blog -->*/}
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="row">
              <Blogarea />
              
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Home;