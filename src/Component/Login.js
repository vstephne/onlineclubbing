import React, {Component} from 'react';


class   Login extends Component{
  render(){
    return(
      <div>
       
       <form class="w3-container"  autocomplete="on" >
           <div class="title_div">
            <h1 class="title">Login</h1>
           </div>
            <br/>
            <label class="w3-text-black"><b>User Name</b></label>
            <label class="w3-text-red"><b>*</b></label>
            <input id="userName" type ="text" class="w3-input w3-border w3-light-grey" required autofocus/>
            <br/>

          <label class="w3-text-black"><b>Password</b></label>
          <label class="w3-text-red"><b>*</b></label>
          <input id="password" type ="password" class="w3-input w3-border w3-light-grey" required autofocus/>
          <br/>

          <div >
          <button class="w3-btn w3-blue-grey" type="submit" value="submit"><b>Submit</b></button>
          </div>
       </form>

      </div>
    )
  }
}

export default  Login