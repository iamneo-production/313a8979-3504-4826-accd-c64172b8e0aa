import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/user.service";
import axios from 'axios'
import Card from 'react-bootstrap/Card';

function Home() {
  const [total,setTotal]=useState()
  const [data,setDate] = useState()
  const getData = async() =>{
    console.log(currentUser)
    let a = 0;
     await axios.get(`https://8080-aacdfdcbdbfbcffabfbadbfceaedbfcbceaface.examlyiopb.examly.io/expense/${currentUser.email}`).then((res)=>setData(res)).catch((err)=>{console.log("failed to fetch")})
     data.map((e)=>{ a = Number(e.RawDataPacket.billCost)})
     setTotal(a)
  }
  useEffect(() => {
      getData()
  });

  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);
  const [expense,setExpenses] = useState([])

  return (
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
          <h4 >total</h4>
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
          <h4 >4000</h4>
        </div>
      </Card.Body>
    </Card>
    </div>
    
  </div>
  
</div>
</center>
</>
  );
}

export default Home;