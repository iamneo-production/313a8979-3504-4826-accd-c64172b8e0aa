import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NavInside from './components/NavInside'

function App() {
  return (
    <>
    <NavInside/>
    <Home/>
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
