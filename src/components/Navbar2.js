import React from 'react';
import { FaHome } from 'react-icons/fa';

const Navbar2 = () => {
  return (
    <>
    <nav className='white-nav'>
    <FaHome size={'3em'} className='homeIcon'/>
        <div className='Links'>
            <ul>
                <li>
                    <a href='/about'>Take a Quiz</a>
                </li>

                <li>
                    <a href='/about'>Share Experiences</a>
                </li>
                <li>
                    <a href='/about'>Resources</a>
                </li>
                <li>
                    <a href='/about'>Blogs</a>
                </li>
                <li>
                    <a href='/about'>Who We are</a>
                </li>
            </ul>
        </div>
    </nav>
</>
  )
}

export default Navbar2