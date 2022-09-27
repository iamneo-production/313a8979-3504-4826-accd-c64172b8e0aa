import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [mobileNumber,setMobilenumber] = useState();
    const [userName,setUsername] = useState();
    const [value, setValue] = useState('Employee');
    const notify = () => toast("User Signed in Successfully");
    cosnt forerr = () => toast("Error Occured check credentials");
    const signUp = async(event) =>{
      event.preventDefault();
      await axios.post("https://8080-aacdfdcbdbfbcffabfbadbfceaedbfcbceaface.examlyiopb.examly.io/signup", { email:email,
      password:password,mobileNumber : mobileNumber,
      userName  : userName,role :value , active:true })
      .then((res) => {
        alert("User Registered Successfully")
      }).catch((err)=>{alert(`try diffrent credentials`)})
   }
 
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
      <form style = {{marginTop :'40px'}} >
        <h3>Sign Up</h3>

        <div className="sm" id= "email">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2" id = "username">
          <label>Username</label>
          <input type="string" 
          className="form-control" 
          placeholder="Enter Username" 
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-2" id = "mobileNumber">
          <label>MobileNumber</label>
          <input
            type="string"
            className="form-control"
            placeholder="Enter MobileNumber"
            onChange = {(e)=>setMobilenumber(e.target.value)}
          />
        </div>

        <div className="mb-2" id = "password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange = {(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="mb-2" id = "confirmPassword">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div>
      <label>
        User Type :
        <select value={value} onChange={handleChange}>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
        </select>
      </label>
      <div style = {{height:30}}> </div>
    </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id = "submitButton" onClick={signUp}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Already a user? <a href="/sign-in">Login</a>
        </p>
      </form>
    )
}
