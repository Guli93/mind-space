import React from 'react'

const Love = () => {
  return (
   <div className='love'>
    <h2 data-aos="fade-up"data-aos-delay="100" >DO WHAT YOU LOVE </h2>
    <div data-aos="fade-up"data-aos-delay="200" className='btns'>
      <button className='btn'>Music</button>
      <button className='btn'>Pets</button>
      <button className='btn'>Yoga</button>
      <button className='btn'>Therapy</button>
      <button className='btn'>Books</button>
    </div>

    <h3 data-aos="fade-up" data-aos-delay="300">Want to blah blah?</h3>
    <p data-aos="fade-left" data-aos-delay="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div data-aos="fade-right" data-aos-delay="700" className='love-search'></div>
   </div>
  )
}

export default Love