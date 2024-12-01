import React, { useEffect, useState } from 'react';
import homeImg from '../images/home-astronaut.png';
import SearchBox from './SearchBox';
import MidPage from '../components/MidPage';
import Pages from '../components/Pages';
import Stories from '../components/Stories';
import Love from '../components/Love';
import Astronaut from '../components/Astronaut';



const Home = () => {

  return (
    <div data-aos-easing="ease-in-out"className='bg2'>
    <div className='home'>
        <div className='home-container'>
        <div data-aos="fade-right"data-aos-delay="100" className='home-text'>
            <h1>
                <span className='purple'>L</span><span className='white'>ETS</span>
            </h1>
            <h1>
                <span className='purple'>H</span><span className='white'>ELP</span>
            </h1>
            <h1>
                <span className='purple'>Y</span><span className='white'>OU</span>
            </h1>
            <h1>
                <span className='purple'>L</span><span className='white'>AUNCH</span>
            </h1>

            <p>TO THE SPACE OF MIND</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className='home-atro'>
            <img className='home-img' src={homeImg} alt="/"></img>
        </div>
       <div>
       <SearchBox data-aos="fade-left"  />
       </div>
    </div>
   
    </div>


    <MidPage data-aos="fade-left" />
  <Pages data-aos="fade-up" />
  <Stories data-aos="zoom out"/>
  <Love/>
  <Astronaut data-aos="fade-up"/>
    
    </div>
  )
}

export default Home