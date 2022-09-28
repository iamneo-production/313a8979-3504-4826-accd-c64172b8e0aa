<<<<<<< HEAD
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
=======
import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
>>>>>>> 74e1b79506b117498d91ec21187c6e3482673532

  return (
<<<<<<< HEAD
<>
    <center>
    <div className="mt-4 d-flex justify-content-center">
      <h2 class="text-light " style = {{textShadow: '2px 2px 6px grey'}}>DASHBOARD</h2>
    </div>

    <div className="container mt-4 " id = "tarrifHomeBody" >
  <div className="row justify-content-start">
    <div className="col-4" id="grid1">
    <Card style={{ width: '18rem',borderRadius:"50px",boxShadow: '10px 10px 10px #A9Bfff' }} className ="p-3 rounded-lg">
     
      <Card.Body>
        <div className="d-flex justify-content-center " >
          <h4 className="shadow-inner" style = {{textShadow: '2px 2px 3px grey'}}>Total Expense</h4>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <h4 >3600</h4>
        </div>
      </Card.Body>
    </Card>
    </div>
    <div className="col-4" id="grid2">
    <Card style={{ width: '18rem' ,borderRadius:"50px",boxShadow: '10px 10px 10px #A9Bfff' }} className ="lg p-3 rounded-lg">
     
      <Card.Body>
        <div className="d-flex justify-content-center ">
          <h4 className="shadow-inner" style = {{textShadow: '2px 2px 3px grey'}}>Pending Expense</h4>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <h4 >3600</h4>
        </div>
      </Card.Body>
    </Card>
    </div>
    <div className="col-4" id="grid3">
    <Card style={{ width: '18rem' ,borderRadius:"50px",boxShadow: '10px 10px 10px #A9Bfff' }} className =" p-3 rounded-lg">
     
      <Card.Body>
        <div className="d-flex justify-content-center ">
          <h4 className="shadow-inner" style = {{textShadow: '2px 2px 3px grey'}}>Approved Expense</h4>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <h4 >3600</h4>
        </div>
      </Card.Body>
    </Card>
    </div>
  </div>
  
  
  <div className="row justify-content-around mt-5" >
    <div className="col-4" id="grid4">
    <Card style={{ width: '18rem' ,borderRadius:"50px",boxShadow: '10px 10px 10px #A9Bfff' }} className ="p-3 rounded-lg">
     
      <Card.Body  >
        <div className="d-flex justify-content-center ">
          <h4 className="shadow-inner" style = {{textShadow: '2px 2px 3px grey'}}>Total Employee</h4>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <h4 >3600</h4>
        </div>
      </Card.Body>
    </Card>
    </div>
    
  </div>
  
</div>
</center>
</>
=======
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
>>>>>>> 74e1b79506b117498d91ec21187c6e3482673532
  );
};

export default Home;