import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaBars ,FaTimes} from 'react-icons/fa';
import SideBar from './SideBar';


const Navbar = () => {
    const [showSideBar,setShowSideBar]=useState(false);
    const handleSideBar=()=>{
        setShowSideBar(!showSideBar);
        console.log("clicked")
    }
 
    return (
        <>

           <SideBar showSideBar={showSideBar}/>
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

                <div className='mobile'>
                   <button onClick={handleSideBar} >{showSideBar?<FaTimes className='sidebarIcons'/> : <FaBars className='sidebarIcons'/>
                   }
                    </button> 
                </div>
            </nav>
        </>
    )
}

export default Navbar