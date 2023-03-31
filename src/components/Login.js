import React from 'react'
import { FaGoogle,FaFacebook} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Login = () => {
    return (
        <>
         
                <div className="home bg2">
                    <div className="box">
                        <div className="container">
                            <div className="top-header">
                                <span>Have an account?</span>
                                <header>Login</header>
                            </div>

                            <div className="input-field">
                                <input type="text" className="input" placeholder="Username" required />
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" className="input" placeholder="Password" required />
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <div className="input-field">
                                <input type="submit" className="submit" value="login" />
                            </div>
                            <div className="bottom">
                                <div className="login-left">
                                    <input type="checkbox" id="check" />
                                    <label for="check">Remember Me</label>
                                </div>
                                <div className="login-right">
                                    <label><a href="/">Forgot password?</a></label>
                                </div>
                            </div>


                            <div className='social-text'>
                                <hr className='social-text-line'></hr><span>or connect wit</span><hr className='social-text-line'></hr>
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
                        </div>
                    </div>
                </div>
           

        </>
    )
}

export default Login