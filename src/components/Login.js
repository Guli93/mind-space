import React, { useRef, useState } from 'react'
import { FaGoogle,FaFacebook} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { validate } from './validate';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const emailRef=useRef(null);
  const passRef=useRef(null);
  const [loginErr,setLoginErr]=useState(null);

  const handleSignupBtn = (e) => {
   e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const validationMessage = validate(email, password);
    setLoginErr(validationMessage)
    if (validationMessage === null) { // null means all validations passed
        dispatch(addUser(true));
        navigate('/')
    } 
}


    return (
        <>
         
                <div className="home bg2">
                    <div  className="box">
                        <form className="container">
                            <div className="top-header">
                                <span>Have an account?</span>
                                <header>Login</header>
                            </div>

                            <div className="input-field">
                                <input ref={emailRef} type="text" className="input" placeholder="Username or email" required />
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="input-field">
                                <input  ref={passRef} type="password" className="input" placeholder="Password" required />
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <div className="input-field">
                                <button onClick={handleSignupBtn} className='submit'>login</button>
                            </div>
                             <p className='loginErr'>{loginErr}</p>
                            <div className="bottom">
                                <div className="login-left">
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check">Remember Me</label>
                                </div>
                                <div className="login-right">
                                    <label><a href="/">Forgot password?</a></label>
                                </div>
                            </div>


                            <div className='social-text'>
                                <hr className='social-text-line'></hr><span>or connect with</span><hr className='social-text-line'></hr>
                            </div>
                            <div className='flex mid'>
                                <button className='sm'>
                                    <FaGoogle className='git' />

                                </button>
                                <button className='sm'>
                                    <FaFacebook className='ig' />
                                </button>

                                <button className='sm'>
                                    <FaLinkedin className='linkdn' />
                                </button>
                            </div>
                        
                        </form>
                    </div>
                </div>
           

        </>
    )
}

export default Login