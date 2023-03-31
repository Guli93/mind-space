
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Blogs from './components/Blogs';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (

<BrowserRouter basename='/mind-space'>

   <Navbar/>
   <Navbar2/>
  
  <Routes>
  <Route exact path='/' element={<Home/>}/> 
  <Route  path='/login' element={<Login/>}/> 
  <Route  path='/blog' element={<Blogs/>}/> 
  </Routes>
 
  <Footer/>
  </BrowserRouter>  
  
  )
}

export default App;
