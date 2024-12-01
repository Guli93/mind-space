import React from 'react';
import midPageImg from '../images/mid-page.png';


const MidPage = (props) => {
  return (
   <>
   <div className='mid-page'>
    <div data-aos="fade-right" className='mid-page-img'>
      <img src={midPageImg} alt="/"></img>
    </div>
    <div data-aos="fade-left" className='text'>Lorem ipsum olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure </div>
   </div>
   </>
  )
}

export default MidPage