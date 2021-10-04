import React, { useEffect,useState } from 'react';
import './service.css'

import { Card, Col,  Row } from 'react-bootstrap';

const Services = () => {
    const [moreServises, setMoreServices] = useState([])
    useEffect(()=>{
      fetch('serviceDetail.json')  
      .then(res=>res.json())
      .then(data => setMoreServices(data))
    },[]) 
    return (
        <div className="service">
            <div className="header-content">
               <h2 className="header-title">More Services</h2>

            </div>
            <Row >
                
                {
                    moreServises.map(moreService=>(
                         <Col xs={6} md={4} className="single-card">
                              <Card className="carded">
                                <Card.Img style={{height:"250px"}} variant="top" src={moreService.img} />
                                <Card.Body>
                                    <Card.Title>{moreService.name}</Card.Title>
                                    <Card.Text>
                                        {moreService.description}
                                        <h4>Per Pakage: ${moreService.price}</h4>
                                        <h4>Email: {moreService.email}</h4>
                                        <h5>Address: {moreService.address}</h5>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </Col>
                     ))
                }
                
            </Row>
            
        </div>
    
        
    );
};

export default Services;


