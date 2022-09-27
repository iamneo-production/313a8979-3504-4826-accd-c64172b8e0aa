import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
      <section className='login' id='login'>
  <div className='head'>
  <h1 className='company'>Universe Explorer</h1>
  </div>
  <p className='msg'>Welcome back</p>
  <div className='form'>
    <form>
  <input type="text" placeholder='Username' className='text' id='username' required/><br/>
  <input type="password" placeholder='••••••••••••••' className='password'/><br/>
  <a href="#" className='btn-login' id='do-login'>Login</a>
  <a href="#" className='forgot'>Forgot?</a>
    </form>
  </div>
</section>


  <script  src="./script.js"/>
    </>
  );
}

export default Login;
