
import Login from './Component/Login'
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Component/Home'
import Register from './Component/Register'

function App(){

  
  
  
  
   return(
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path = "/home" element = {<Home/>}></Route>
          <Route exact path = "/" element = {<Login/>}></Route>
          <Route exact path = "/Register" element = {<Register/>}></Route>
      </Routes>
  </BrowserRouter>
    
    
    </>
   );
  }


// export function APPWithRouter(props){
//   const navigate = useNavigate()
//   return (<App navigate={navigate}/>)
// }

export default App;
