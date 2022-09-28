import React from "react"
import Container from "react-bootstrap/esm/Container";

function Admin() {
    return (
        <>
            <div className="input-group mt-3 px-5 mr-5">
                <input type="search" className="form-control rounded shadow-lg ml-5" placeholder="Type here to search" aria-label="Search" aria-describedby="search-addon" />
                <div className="px-5">
                    <button type="button" className="btn sm btn-primary">Search</button>
                </div>
                <div >
                    <button type="button" className="btn sm btn-primary">ADD</button>
                </div>
            </div>
            <Container className="mt-5">
                <div className="row">
                    <div className="column" style={{ float: 'left', width: '70%' }}>
                        hi
                    </div>
                    <div className="column" style={{ float: 'right', width: '30%' }}>

                        


                        <div >
                        <div className = "d-flex justify-content-center mt-3" >
                        <h3>ADD/Edit Details</h3>
                        </div>
                        <div className = "d-flex justify-content-center mt-3" >
                        </div>

                        <div className="mb-3" id="enterName">

                        <input
                        type ="string"
                        className="form-control"
                        placeholder="Enter Name"
                        />
                        </div>

                        <div className="mb-3" id="enterEmail">

                        <input type ="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="mb-3" id="emailPassword">

                        <input
                        type ="password"
                        className="form-control"
                        placeholder="Enter Password"
                        />
                        </div>

                        <div className="mb-3" id="enterExperience">

                        <input
                        type ="number"
                        className="form-control"
                        placeholder="Enter Experience"
                        />
                        </div>

                        <div className="mb-3" id="enterSpecialist">

                        <input
                        type ="string"
                        className="form-control"
                        placeholder="Enter Specialist"
                        />
                        </div>

                        <div className="d-grid">
                        <button type ="submit" className="btn sm btn-primary" id="submitButton">
                        Update
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Admin;