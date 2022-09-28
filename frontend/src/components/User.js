import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "@restart/ui/esm/Button";

import im from "./usericon.png"


function User() {
    return (

        <>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "blue" }}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className="d-flex justify-content-center" >

                    
                        <div >
                            <div className = "d-flex justify-content-center" >
                                <h3>Add Expense</h3>
                            </div>
                            <div className="rounded">
                                <img src={im} />
                            
                                                 </div>

                            <div className="mb-3" id="email">
                            <label>Select Date</label>

                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Select Date"
                                />
                            </div>

                            <div className="mb-3" id="username">
                            <label>Employee ID</label>

                                <input type="string" className="form-control" placeholder="Emp ID" />
                            </div>

                            <div className="mb-3" id="mobileNumber">
                            <label>Upload Recipt</label>

                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder="Upload Reciep"
                                />
                            </div>

                            <div className="mb-3" id="password">
                            <label>Amount</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                />
                            </div>

                            <div className="mb-3" id="confirmPassword">
                            <label>Description</label>

                                <input
                                    type="string"
                                    className="form-control"
                                    placeholder="Enter Description"
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn sm btn-primary" id="submitButton">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default User;