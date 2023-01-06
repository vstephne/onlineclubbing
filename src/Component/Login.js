import React, {useState, Component} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// function nav(){
//   const navigate=useNavigate()
//   navigate("home")
// }


const Login =() =>{
  
  const navigate = useNavigate();
  
  
  // constructor(props) {
  //   super(props)
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
  //}

  

  // function setEmail(newEmail){
  //   console.log(newEmail)
  //   state.setState((prevState)=>({
  //     email:newEmail,
  //     password: prevState.password
  //   })

  //   )
  // }

  // function setPassword(newPassword){
  //   console.log(newPassword)
  //   state.setState((prevState)=>({
  //     email:prevState.email,
  //     password: newPassword
  //   })

  //   )
  // }
  function submitbutton(e){
    e.preventDefault();
    console.log(email)
    navigate("/home")
  
  }
  
    return(
     
      <div>
       
       <form class="w3-container"  autocomplete="on" onSubmit = {submitbutton} >
           <div class="title_div">
            <h1 class="title">Login</h1>
           </div>
            <br/>
            <label class="w3-text-black"><b>User Name</b></label>
            <label class="w3-text-red"><b>*</b></label>
            <input id="userName" type ="text" class="w3-input w3-border w3-light-grey" required autofocus value = {email} onChange = {(e) => setEmail(e.target.value)}/>
            <br/>

          <label class="w3-text-black"><b>Password</b></label>
          <label class="w3-text-red"><b>*</b></label>
          <input id="password" type ="password" class="w3-input w3-border w3-light-grey" required autofocus value = {password} onChange = {(e) => setPassword(e.target.value)}/>
          <br/>

          <div >
          <button class="w3-btn w3-blue-grey" type="submit" value="submit" ><b>Submit</b></button>
          </div>
       </form>

      </div>
     
    )
  
}

export default Login