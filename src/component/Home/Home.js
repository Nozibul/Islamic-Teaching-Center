import React, { useEffect, useState } from 'react';
import { Card, Col,  Row , Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
              
               <h1 className="title">Our Service</h1>
            <Row>
                
                {
                    servises.map(service=>(
                         <Col xs={6} md={6} className="service-card">
                              <Card>
                                <Card.Img style={{height:"250px"}} variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                        <h4>Per Pakage: ${service.price}</h4>
                                   </Card.Text>
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

