import React, { useEffect, useState } from 'react';
import { Card, Col,  Row , Button, Container} from 'react-bootstrap';
import Slider from '../slider/Slider';
import './home.css'

const Home = () => {
    const [servises, setServices] = useState([])
    useEffect(()=>{
      fetch('service.json')  
      .then(res=>res.json())
      .then(data => setServices(data))
    },[])
    return (
         <div className="bg-style">
              {/* this slider component  */}
              <Slider />

           <Container className="cart">
              
               <h1>Our Service</h1>
            <Row className="single-card">
                
                {
                    servises.map(service=>(
                         <Col xs={6} md={6}>
                              <Card>
                                <Card.Img style={{height:"250px"}} variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                </Card>
                        </Col>
                     ))
                }
                
            </Row>
            
        </Container>
     </div> 
    );
};

export default Home;

