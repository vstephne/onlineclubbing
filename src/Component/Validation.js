import validator from 'validator'

const Validation =(values) =>{
  let errors = {}
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!values.userName){
    errors.userName = "Name required"
  }
  else if(values.userName.length < 5){
    errors.userName = "Name must be more than 5"
  }
  if(!values.Email){
    errors.Email = "Email is required"
  }
  
  else if ( !validator.isEmail(values.Email) ) {
    errors.Email = "Must be in format abc@domain.com"
  }
  if(!values.Password){
    errors.Password = "Password is required"
  }
  else if(values.Password.length < 8){
    errors.Password = "Password must be more than 8"
  }
  if(!values.phone){
    errors.Phone = "Phone number is required"
  }
  else if(!validator.isMobilePhone(values.phone)){
    errors.Phone = "Incorrect format for phone number"
  }
return errors
  }


  export default Validation;