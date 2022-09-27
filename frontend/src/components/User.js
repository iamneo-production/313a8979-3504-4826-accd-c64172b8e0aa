import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "@restart/ui/esm/Button";




function User() {
    return (

        <>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "blue" }}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
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
                            <div >
                                <h3>Add Expense</h3>
                            </div>
                            <div>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            </div>

                            <div className="mb-3" id="email">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div className="mb-3" id="username">
                                <label>Username</label>
                                <input type="string" className="form-control" placeholder="Enter Username" />
                            </div>

                            <div className="mb-3" id="mobileNumber">
                                <label>MobileNumber</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter MobileNumber"
                                />
                            </div>

                            <div className="mb-3" id="password">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                />
                            </div>

                            <div className="mb-3" id="confirmPassword">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary" id="submitButton">
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