
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Blogs from './components/Blogs';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Experience from './components/Experience';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Carousel from './components/Carousal';

function App() {
  useEffect(()=>{
    Aos.init({duration: 1000});
},[])

  return (

<BrowserRouter basename='/mind-space'>

   <Navbar/>
   <Navbar2/>
  
  <Routes>
  <Route exact path='/' element={<Home/>}/> 
  <Route  path='/login' element={<Login/>}/> 
  <Route  path='/blog' element={<Blogs/>}/> 
  <Route  path='/experience' element={<Experience/>}/> 
  <Route path='/carousel' element={<Carousel/>}/>
  </Routes>
 
  <Footer/>
  </BrowserRouter>  
  
  )
}

export default App;
