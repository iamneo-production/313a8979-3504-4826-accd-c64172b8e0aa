import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "@restart/ui/esm/Button";

// export default class User extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             error:null,
//             isLoaded:false,
//             items:[]
//         };
//     }
//     componentDidMount(){
//         fetch("https://8080-bbfedbcfaedbadbfceaedbfcbceaface.examlyiopb.examly.io/items")
//         .then(res=> res.json())
//         .then((result)=>{
//             this.setState({
//                 isLoaded:true,
//                 items:result.items,
//             });
//         },
//         (error)=>{
//             this.state({
//                 isLoaded:true,
//                 error
//             })
//         }
//         )
//     }
//     render(){
//         const{error,isLoaded,items}=this.state;
//         if(error){
//             return <div>Error:{error.message}</div>
//         }else if(!isLoaded){
//             return <div>isLoaded</div>
//         }else{
//             return(
//                 <ul>
//                 {items.map(item=>(
//                     <li key={item.id}>
//                         {item.name} {item.price}
//                     </li>
//                 ))}
//                 </ul>
//             )
//         }
//     }
// }


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
                    <Col>
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
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default User;