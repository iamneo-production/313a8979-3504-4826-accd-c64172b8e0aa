<<<<<<< HEAD
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// import Login from './components/Login'
// import Signup from './components/Signup'
// import Home from './components/Home'
import NavInside from './components/NavInside'
import User from './components/User'
=======
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }
  }, [currentUser]);
>>>>>>> 74e1b79506b117498d91ec21187c6e3482673532

  return (
<<<<<<< HEAD
    <>
    <NavInside/>
    <User/>
    {/* <Home/> */}
    </>
    // <Router>
    //   <div className="App">
    //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //       <div className="container">
    //         <Link className="navbar-brand" to={'/sign-in'}>
    //           Tarrif Manager
    //         </Link>
    //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //           <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //               <Link className="nav-link" to={'/sign-in'}>
    //                 Home
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link" to={'/sign-in'}>
    //                 Login
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link" to={'/sign-up'}>
    //                 Sign up
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>

    //     <div className="auth-wrapper">
    //       <div className="auth-inner">
    //         <Routes>
    //           <Route exact path="/" element={<Login />} />
    //           <Route path="/sign-in" element={<Login />} />
    //           <Route path="/sign-up" element={<Signup />} />
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </Router>
  )
}

export default App
=======
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Tarriff
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;
>>>>>>> 74e1b79506b117498d91ec21187c6e3482673532
