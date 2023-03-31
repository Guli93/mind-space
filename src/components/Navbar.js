import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <li>
                    <Link to='/'><img src={logo} alt='logo'></img></Link>
                    </li>
                </div>
                <div className='authentication'>
                    <ul>
                        <li>
                            <Link to='/'>About</Link>
                        </li>

                        <li>
                            <Link to='/login'>Login/Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar