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
  
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username, setuserame] = useState('')
    const [phone, setphone] = useState('')
    const [error, setErrors]=useState({})
    const [isSubmit, setisSubmit]=useState(false);
  
    const[value, setvalues] = useState(
      {
        Email: email,
        Password: password,
        userName: username,
        Phone: phone,
    }
    )

    
  function submitbutton(e){
    e.preventDefault();
    setErrors(Validation(value));
    setisSubmit(true);
    navigate("/")
    }

  useEffect(() => {
    if(Object.keys(error).length === 0 && isSubmit){navigate("/");}
  }, [error]);
     
  

  function handleChange(e){
    // setvalues({Email: email,
    //   Password: password,
    //   userName: username,
    //   phone: phone})
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
            <input id="Email" type ="Email" className="w3-input w3-border w3-light-grey"  autoFocus value = {value.email} onChange = {(e) => handleChange.setEmail}  />

            
            {error.Email && <p style={{color:"red",fontSize:"13px"}}>{error.Email}</p>}

            <br/>
            <label className="w3-text-black"><b>User Name</b></label>
            <label className="w3-text-red"><b>*</b></label>
            <input id="userName" type ="text" className="w3-input w3-border w3-light-grey"  autoFocus value = {value.username} onChange = {(e) => handleChange.setuserName}/>

            {error.userName && <p style={{color:"red",fontSize:"13px"}}>{error.userName}</p>}
            <br/>

          <label className="w3-text-black"><b>Password</b></label>
          <label className="w3-text-red"><b>*</b></label>
          <input id="password" type ="password" className="w3-input w3-border w3-light-grey"  autoFocus value = {value.password} onChange = {(e) => handleChange.setPassword}/>
          {error.Password && <p style={{color:"red",fontSize:"13px"}}>{error.Password}</p>}
          <br/>
          

            <label className="w3-text-black"><b>Phone no</b></label>
            <label className="w3-text-red"><b>*</b></label>
            <input id="phone" type ="phone" className="w3-input w3-border w3-light-grey"  autoFocus value = {value.phone} onChange = {(e) => handleChange.setphone}/>
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