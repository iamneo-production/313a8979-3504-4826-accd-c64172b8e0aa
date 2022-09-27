import React from 'react'
// import './Login.css'


 
   

function Signup() {
  return (
    <>
      
          <div>
            
            <p>Sign In</p>
            <input
              type="email"
              placeholder="Email"
             
              onChange={this.onTextboxChangeSignInEmail}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
             
              onChange={this.onTextboxChangeSignInPassword}
            />
            <br />
            <button onClick={this.onSignIn}>Sign In</button>
          </div>
          <br />
          <br />
          <div>
            
            <p>Sign Up</p>
            <input
              type="email"
              placeholder="Email"
              
              onChange={this.onTextboxChangeSignUpEmail}
            /><br />
            <input
              type="password"
              placeholder="Password"
             
              onChange={this.onTextboxChangeSignUpPassword}
            /><br />
            <button onClick={this.onSignUp}>Sign Up</button>
          </div>

      
    </>
  );
}

export default Signup;
