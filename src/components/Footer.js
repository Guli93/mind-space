import React from 'react'
import logo from '../images/logo.png';

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
           
            </ul>
        </div>
        <div className='footer-logo'>
            <img size={'20rem'} src={logo}></img>
        </div>
    </div>
    </>
  )
}

export default Footer