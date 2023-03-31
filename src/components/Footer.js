import React from 'react'
import logo from '../images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-text'>
            <ul>
            <li>
            <a href='/'>TERMS OF USE</a>
            </li>
            <li>
            <a href='/'>PRIVACY POLICY</a>
            </li>
            <li>
            <a href='/'>ACCESSIBILITY AND LANGUAGE</a>
            </li>
            <li>
            <a href='/'>COMMUNICATION MATERIALS</a>
            </li>
           

            <div className='flex'>
         <button className='sm'>
         <Link to='https://github.com/'><FaGithub className='git'/></Link>
         </button>
         <button className='sm'>
         <Link to='https://www.instagram.com/'> <FaInstagram className='ig'/></Link> 
           </button>
           
           <button className='sm'>
           <Link to='https://in.linkedin.com/'><FaLinkedin className='linkdn'/></Link>
           </button>
           </div>
            </ul>
       
        </div>
        <div className='footer-logo'>
            <img size={'20rem'} src={logo} alt='/'></img>
        </div>
    </div>
    </>
  )
}

export default Footer