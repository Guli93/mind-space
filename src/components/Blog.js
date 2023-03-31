import React from 'react'
import { Link } from 'react-router-dom'
import bg2 from '../images/story1.png';

const Blog = (props) => {
    return (
        <>
            <div className='blog'>
                <img src={bg2}></img>
               
                <div className='blog-text'style={{backgroundColor: props.color }}>
                <button className='blog-btn'>Anxiety</button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textscrambled it to make a type specimee of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <hr/>
                    <li><a href='/'>Show more</a></li>
                </div>
            </div>
        </>


    )
}

export default Blog