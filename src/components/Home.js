import React from 'react';
import homeImg from '../images/home-astronaut.png';
import SearchBox from './SearchBox';
import MidPage from '../components/MidPage';
import Pages from '../components/Pages';
import Stories from '../components/Stories';
import Love from '../components/Love';
import Astronaut from '../components/Astronaut';


const Home = () => {
  return (
    <div className='bg2'>
    <div className='home'>
        <div className='home-container'>
        <div className='home-text'>
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
        <div className='home-atro'>
            <img className='home-img' src={homeImg} alt="/"></img>
        </div>
       <div>
       <SearchBox/>
       </div>
    </div>
   
    </div>


    <MidPage/>
  <Pages/>
  <Stories/>
  <Love/>
  <Astronaut/>
    
    </div>
  )
}

export default Home