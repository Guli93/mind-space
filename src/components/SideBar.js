import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ showSideBar }) => {
  return (
    <div className={`sidebar ${showSideBar ? 'open' : ''}`}>
      <ul className='sidebarLinks'>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/login'>Login/Signup</Link>
        </li>
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
          <Link to='/'>Who We Are</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
