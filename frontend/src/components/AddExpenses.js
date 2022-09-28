import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

function AddExpense() {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [date,setDate] = useState();
    const [empEmail,setEmpemail] = useState();
    const [reciept,setRecipt] = useState();
    const [amount,setAmount] = useState();
    const [desc,setDesc] = useState(); 

    const handleAmount = e =>{
        setAmount(e.target.value)
    }
    const handleReciept = e => {
        setRecipt(e.target.value)
    }
    const handleEmpid = e =>{
        setEmpemail(e.target.value)
    }
    const handleDesc = e =>{
        setDesc(e.target.value)
    }
    const handleDate = (e) =>{
        setDate(e.target.value)
    }
    const Add = async () => {
        await axios.post("https://8080-aacdfdcbdbfbcffabfbadbfceaedbfcbceaface.examlyiopb.examly.io/expense",{
         expenseId : empEmail,
         datedOn:date,
         billImage :reciept,
         status : "unpaid",
         remark :desc,
         billCost:amount,
         claimedBy:currentUser.email,
         billNumber : Math.floor(Math.random() * 1000000000)
        }).then((res)=>console.log(res))
    }

    return (
        <>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "blue" }}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000x1000/99/10/expense-word-lettering-vector-18889910.webp"/>
                            <Card.Body>
                                <Card.Title>Add expense</Card.Title>
                                <Card.Text>
                                  Add the expense and its bill
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className="d-flex justify-content-center" >

                    
                        <div >
                            <div className = "d-flex justify-content-center mt-3" >
                                <h3>Add Expense</h3>
                            </div>
                            <div className = "d-flex justify-content-center mt-3" >
                                <img src="https://cdn.vectorstock.com/i/1000x1000/99/10/expense-word-lettering-vector-18889910.webp"  style={{width: "100px" , height :"100px"}} className="center"/>
                             </div>

                            <div className="mb-3" id="email">
                            <label>Select Date</label>

                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Select Date"
                                    onChange={handleDate}
                                />
                            </div>

                            <div className="mb-3" id="username">
                            <label>Employee ID</label>

                                <input type="string" onChange={handleEmpid} className="form-control" placeholder="Emp ID" />
                            </div>

                            <div className="mb-3" id="mobileNumber">
                            <label>Upload Recipt</label>

                                <input
                                    onChange={handleReciept}
                                    type="file"
                                    className="form-control"
                                    placeholder="Upload Reciep"
                                />
                            </div>

                            <div className="mb-3" id="password">
                            <label>Amount</label>

                                <input
                                    onChange={handleAmount}
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3" id="confirmPassword">
                            <label>Description</label>

                                <input
                                    onChange = {handleDesc}
                                    type="string"
                                    className="form-control"
                                    placeholder="Enter Description"
                                />
                            </div>
                            <div className="d-grid">
                            <Button onClick = {Add} variant="primary">Add</Button>{' '}
                </div>
                  
                        </div>
                    </Col>
                </Row>
    
            </Container>
        </>

    );
}

export default AddExpense;