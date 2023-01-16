
import Login from './pages/Login'
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Spotify from './pages/Spotify'
import Navbar from './Component/Navbar';

function App(){

   return(
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route exact path = "/home" element = {<Home/>}></Route>
          <Route exact path = "/" element = {<Login/>}></Route>
          <Route exact path = "/Register" element = {<Register/>}></Route>
          <Route exact path = "/Contact" element = {<Contact/>}></Route>   
          <Route exact path = "/Spotify" element = {<Spotify/>}></Route>    
      </Routes>
  </BrowserRouter>
    </>
   );
  }



export default App;
