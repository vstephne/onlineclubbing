
import Login from './Component/Login'
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Component/Home'
import Register from './Component/Register'
import Contact from './Component/Contact'
import Spotify from './Component/Spotify'

function App(){

   return(
    <>
    <BrowserRouter>
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
