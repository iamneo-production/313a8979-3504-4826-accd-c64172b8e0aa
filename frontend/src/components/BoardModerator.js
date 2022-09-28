import React,{useState} from "react"
import Container from "react-bootstrap/esm/Container";
import axios from 'axios'
function BoardModerator() {
    const [expenseId,setExpenseid] = useState()
    const [billCost,setCost] = useState()

    const update = async () =>{
        await axios.put(`https://8080-aacdfdcbdbfbcffabfbadbfceaedbfcbceaface.examlyiopb.examly.io/${expenseId}`,{billCost},(req,res)=>{
            console.log(res);
        })

    }
    const handleMail = (e) =>{
        setExpenseid(e.target.value)
    } 
    const handleBill = (e) =>{
        setCost(e.target.value)
    } 

 

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
                        <table class="table table-borderless mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Bill No</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">BillCost</th>
                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                
                                </tr>
                                
                            </tbody>
                        </table>

                    </div>
                    <div className="column" style={{ float: 'right', width: '30%' }}>




                        <div >
                            <div className="d-flex justify-content-center mt-3" >
                                <h3>ADD/Edit Details</h3>
                            </div>
                            <div className="d-flex justify-content-center mt-3" >
                            </div>

                            <div className="mb-3" id="enterName">

                                <input
                                    type="string"
                                    className="form-control"
                                    placeholder="Enter BillCost"
                                    onChange  = {handleBill}
                                />
                            </div>

                            <div className="mb-3" id="enterEmail">

                                <input type="email" onChange = {handleMail} className="form-control" placeholder="Enter BillId" />
                            </div>

                       
                      

                            <div className="d-grid">
                                <button type="submit" onClick = {update} className="btn sm btn-primary" id="submitButton">
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

export default BoardModerator;