import React from 'react'
import story1 from '../images/story1.png';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import story2 from '../images/story2.png';
import story3 from '../images/story3.png';


const Stories = () => {
  return (
   <>
   <div className='stories-page bg1'>
    <h2>MINDSPACE STORIES</h2>
    <div className='stories'>
    <div className='arrow'>
            <FaArrowLeft size={'2.3rem'}/>
        </div>
        <div className='story-box'> 
        <div className='sub-story-box'>
            <p>I OVERCAME MY PHASE OF DEPRESSION WITHING 10 DAYS</p>
            <a href='/'>Show more</a>
        </div>
        </div>
        <div className='story-box' style={{backgroundImage: `url(${story2})`}}>
        <div className='sub-story-box'>
            <p>RECOVERY FROM ANXIETY IS POSSIBLE</p>
            <a href='/'>Show more</a>
        </div> 
        </div>
        <div className='story-box' style={{backgroundImage: `url(${story3})`}}>
        <div className='sub-story-box'>
            <p>HOW TO HELP SOMEONE WHO IS HAVING SOME NEGATIVE INSTRUSIVE THOUGTS</p>
            <a href='/'>Show more</a>
        </div>
         </div>
        <div className='arrow'>
            <FaArrowRight size={'2.2rem'}/>
        </div>
    
    </div>
   </div>
   </>
  )
}

export default Stories