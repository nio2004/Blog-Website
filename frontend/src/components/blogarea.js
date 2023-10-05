import React,{ useState } from 'react'
import Blogthumbnail from './view blog/blogthumbnail'
import Mypost from './mypost'
import Blogdetail from './blogdetail';

const Blogarea = ({flag, id}) => {
  console.log(flag,id)
  const [selectedOption, setSelectedOption] = useState('popularPosts'); // Default to 'My Posts'

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
        <div className='column'>
            
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked={selectedOption === 'myPosts'}
            onChange={() => handleRadioChange('myPosts')}/>
            <label className="btn btn-outline-dark" htmlFor="btnradio1">My Posts</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" checked={selectedOption === 'popularPosts'}
            onChange={() => handleRadioChange('popularPosts')}/>
            <label className="btn btn-outline-dark" htmlFor="btnradio2">Popular Post</label>
        </div>
        <hr />
        {selectedOption === 'myPosts' ? <Mypost /> : null}
        {selectedOption === 'popularPosts' ? <Blogthumbnail /> : null}
        
      </div>
    </div>
  )
}

export default Blogarea
