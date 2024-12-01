import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import story2 from '../images/story2.png';
import story1 from '../images/story1.png';
import story3 from '../images/story3.png';


const Carousal = () => {
  const slides = [
    { id: 1, text: 'I OVERCAME MY PHASE OF DEPRESSION WITHIN 10 DAYS', image: story1 },
    { id: 2, text: 'RECOVERY FROM ANXIETY IS POSSIBLE', image: story2 },
    { id: 3, text: 'HOW TO HELP SOMEONE WHO IS HAVING NEGATIVE INTRUSIVE THOUGHTS', image: story3 },
    { id: 4, text: 'SUPPORTING FRIENDS DURING MENTAL CHALLENGES', image: story2 },
    { id: 5, text: 'FINDING PEACE THROUGH MINDFULNESS', image: story3 },
  ];

  // Slick slider settings
  const settings = {
    infinite: true,
    slidesToShow: 3,  // Show 3 slides at once
    slidesToScroll: 1, // Scroll 1 slide at a time
    centerMode: false,
    arrows: true, // Show the arrows
    nextArrow: <FaArrowRight size="2.3rem" />,
    prevArrow: <FaArrowLeft size="2.3rem" />,
    speed: 500, // Transition speed
    easing: 'ease-in-out', // Transition easing
  };

  return (
   
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="story-box" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className='sub-story-box'>
                <p>{slide.text}</p>
                <a href='/'>Show more</a>
              </div>
            </div>
          ))}
        </Slider>
    
  );
};

export default Carousal;
