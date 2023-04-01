import React from 'react';
import box1 from '../images/box1.png';
import box2 from '../images/box2.png';
import box3 from '../images/box3.png';
import box4 from '../images/box4.png';
import box5 from '../images/box5.png';
import box6 from '../images/box6.png';

const Pages = () => {
  return (
<>
<div className='pages bg'>
    
<div className='left'>
<div className='box boxl box1'>
  <img src={box1} ></img>  
    Music Therapy</div>

<div className='box boxl box2'> 
<img src={box2} ></img>  
pets Recommendation</div>

<div className='box  boxl box3'>
<img src={box3} ></img>  
  Book Recommendation</div>
</div>
<div className='line'>
  <div className='dot'></div>
</div>
<div className='right'>
<div className='box boxr box4'> 
  Group Councelling
  <img src={box4} ></img> 
  </div>
<div className='box boxr box5'>

Therapy Session
<img src={box5} ></img>  
</div>
<div className='box boxr box6'> 
  Yoga/Meditation
  <img src={box6} ></img> 
  </div>
</div>

</div>
</>
  )
}

export default Pages