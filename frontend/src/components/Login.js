import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form id = "loginBox">
        <h3>Login</h3>

        <div className="mb-3" id = "email">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3" id = "password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id= "loginButton">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          New User? <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    )
  }
}
