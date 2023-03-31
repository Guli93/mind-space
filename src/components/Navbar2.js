import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <>
    <nav className='white-nav'>
    <Link to='/'><FaHome size={'3em'} className='homeIcon'/></Link>
        <div className='Links'>
            <ul>
                <li>
                    <Link to='/'>Take a Quiz</Link>
                </li>

                <li>
                    <Link to='/experience'>Share Experiences</Link>
                </li>
                <li>
                    <Link to='/'>Resources</Link>
                </li>
                <li>
                    <Link to='/blog'>Blogs</Link>
                </li>
                <li>
                    <Link to='/'>Who We are</Link>
                </li>
            </ul>
        </div>
    </nav>
</>
  )
}

export default Navbar2