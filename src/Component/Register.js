import React, {useState, useEffect, Component} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Validation from './Validation';
// function nav(){
//   const navigate=useNavigate()
//   navigate("home")
// }


const Login = () =>{
  
    const navigate = useNavigate();
  
    var count =0;
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userName, setuserName] = useState('')
    const [phone, setphone] = useState('')
    const [error, setErrors]=useState({new:"new"})
    const [isSubmit, setIsSubmit]=useState(false)
    // const [isSubmit, setisSubmit]=useState(false);
  
    const[value, setvalues] = useState(
      {
        Email: '',
        Password: '',
        userName: '',
        Phone: '',
    })

    useEffect(()=>
    {
      if(isSubmit){
       setErrors(Validation(value)); 
      }   
    },[value]   
    )


    useEffect(()=>
    {
      if(Object.keys(error).length === 0 ){
       navigate("/");
      }
    },[error]   
    )

    
  function submitbutton(e){
    setIsSubmit(true)
    e.preventDefault();
    setvalues({Email: email,
      Password: password,
      userName: userName,
      phone: phone})
   
   
    
    }

 
     
  

  function handleChange(e){
    
    setvalues({...value, [e.target.name]: e.target.value})
  };
  // const Forminput = (props) => {
    return(
     
      <div>
       
       <form className="w3-container"  autoComplete="on" onSubmit = {submitbutton} >
           <div className="title_div">
            <h1 className="title">Register</h1>
           </div>
            <br/>
            <label className="w3-text-black"><b>Email</b></label>
            <label className="w3-text-red"><b>*</b></label>
            <input id="Email" type ="text" className="w3-input w3-border w3-light-grey"  autoFocus value = {email} onChange = {(e) => setEmail(e.target.value)}  />

            
            {error.Email && <p style={{color:"red",fontSize:"13px"}}>{error.Email}</p>}

            <br/>
            <label className="w3-text-black"><b>User Name</b></label>
            <label className="w3-text-red"><b>*</b></label>
            <input id="userName" type ="text" className="w3-input w3-border w3-light-grey"  autoFocus value = {userName} onChange = {(e) => setuserName(e.target.value)}/>

            {error.userName && <p style={{color:"red",fontSize:"13px"}}>{error.userName}</p>}
            <br/>

          <label className="w3-text-black"><b>Password</b></label>
          <label className="w3-text-red"><b>*</b></label>
          <input id="password" type ="password" className="w3-input w3-border w3-light-grey"  autoFocus value = {password} onChange = {(e) => setPassword(e.target.value)}/>
          {error.Password && <p style={{color:"red",fontSize:"13px"}}>{error.Password}</p>}
          <br/>
          

            <label className="w3-text-black"><b>Phone no</b></label>
            <label className="w3-text-red"><b>*</b></label>
            <input id="phone" type ="phone" className="w3-input w3-border w3-light-grey"  autoFocus value = {phone} onChange = {(e) => setphone(e.target.value)}/>
            {error.Phone && <p style={{color:"red",fontSize:"13px"}}>{error.Phone}</p>}
            <br/>

          <div >
          <button className="w3-btn w3-blue-grey" type="submit" value="submit" ><b>Submit</b></button>
          </div>
          <div>
          <Link to="/">Already have an account? Login</Link>
          </div>
       </form>

      </div>
     
    )
  
}


export default Login