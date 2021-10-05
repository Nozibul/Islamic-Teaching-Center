import React, { useEffect, useState } from 'react';
import { Card, Col,  Row , Button, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Slider from '../slider/Slider';
import './home.css'

const Home = () => {
    const [servises, setServices] = useState([])
    useEffect(()=>{
      fetch('serviceDetail.json')  
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
                    servises.slice(0, 4).map((service,index)=>(
                         <Col key={index} xs={6} md={6} className="service-card">
                             
                              <Card>
                                <Card.Img style={{height:"250px"}} variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                        <h4>Per Pakage: ${service.price}</h4>
                                   </Card.Text>

                                   <Link to={`/home/${service.name}`}>
                                     <Button>More Details</Button>                                       
                                   </Link>
                                   
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

