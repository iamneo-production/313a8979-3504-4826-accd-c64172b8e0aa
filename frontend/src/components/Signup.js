import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3" id= "email">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-3" id = "username">
          <label>Username</label>
          <input type="string" className="form-control" placeholder="Enter Username" />
        </div>

        <div className="mb-3" id = "mobileNumber">
          <label>MobileNumber</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter MobileNumber"
          />
        </div>

        <div className="mb-3" id = "password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-3" id = "confirmPassword">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id = "submitButton">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Already a user? <a href="/sign-in">Login</a>
        </p>
      </form>
    )
  }
}
