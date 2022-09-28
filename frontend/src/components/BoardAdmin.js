import React,{useState,useEffect} from "react"
import Container from "react-bootstrap/esm/Container";
import axios from 'axios';
function BoardAdmin() {
    const [data,setData] = useState([])
    const getData = async () =>{
        await axios.get(`https://8080-aacdfdcbdbfbcffabfbadbfceaedbfcbceaface.examlyiopb.examly.io/expense/getAll`).then((res)=>{console.log(res.data.results)
          setData([res.data.results])
          console.log(data)
      }).catch((err)=>{console.log("failed to fetch")})
         console.log(data)
      }
      useEffect(() => {
          getData()
      });
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
                                    <th scope="col">S No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
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
                                    placeholder="Enter Name"
                                />
                            </div>

                            <div className="mb-3" id="enterEmail">

                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="mb-3" id="emailPassword">

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                />
                            </div>

                            <div className="mb-3" id="enterExperience">

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Experience"
                                />
                            </div>

                            <div className="mb-3" id="enterSpecialist">

                                <input
                                    type="string"
                                    className="form-control"
                                    placeholder="Enter Specialist"
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn sm btn-primary" id="submitButton">
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

export default BoardAdmin;