import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import story2 from '../images/story2.png';
import story1 from '../images/story1.png';
import story3 from '../images/story3.png';

const Stories = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, text: 'I OVERCAME MY PHASE OF DEPRESSION WITHIN 10 DAYS', image: story1 },
    { id: 2, text: 'RECOVERY FROM ANXIETY IS POSSIBLE', image: story2 },
    { id: 3, text: 'HOW TO HELP SOMEONE WHO IS HAVING NEGATIVE INTRUSIVE THOUGHTS', image: story3 },
    { id: 4, text: 'SUPPORTING FRIENDS DURING MENTAL CHALLENGES', image: story2 },
    { id: 5, text: 'FINDING PEACE THROUGH MINDFULNESS', image: story3 },
  ];

  const handleRightArrow = () => {
    setSlideIndex((prevIndex) => (prevIndex + 3) % slides.length);
  };

  const handleLeftArrow = () => {
    setSlideIndex((prevIndex) => (prevIndex - 3 + slides.length) % slides.length);
  };

  // Get the current 3 slides in a circular fashion
  const currentSlides = [
    slides[slideIndex],
    slides[(slideIndex + 1) % slides.length],
    slides[(slideIndex + 2) % slides.length],
  ];

  return (
    <div className='stories-page bg1'>
      <h2>MINDSPACE STORIES</h2>
      <div className='stories story-container'>
        {/* Left Arrow */}
        <button className="arrow left" onClick={handleLeftArrow}>
          <FaArrowLeft size={'2.3rem'} />
        </button>

        {currentSlides.map((slide) => (
          <div
            className='story-box'
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className='sub-story-box'>
              <p>{slide.text}</p>
              <a href='/'>Show more</a>
            </div>
          </div>
        ))}

        {/* Right Arrow */}
        <button className="arrow right" onClick={handleRightArrow}>
          <FaArrowRight size={'2.2rem'} />
        </button>
      </div>
    </div>
  );
};

export default Stories;

