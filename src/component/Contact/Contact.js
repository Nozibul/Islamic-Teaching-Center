import React from 'react';
import './contact.css'
import { Card, Col, Row, } from 'react-bootstrap';
import image1 from '../../images/slider/download.png'
import image2 from '../../images/slider/download.jpg'
import image3 from '../../images/slider/download (1).png'

const Contact = () => {
    return (
    <div className="contact-bg">
            <h2>contact</h2>
          <Row>  
            <Col xs={6} md={4}>
                <Card>
                  <Card.Img style={{height:"200px",width:"200px", margin:"auto"}} variant="top" src={image1} />
                    <Card.Body>
                      <Card.Title>Address</Card.Title>
                        <Card.Text>
                          <p>Hedy Greene, Ap #696-3279 Viverra. Avenue</p>
                        </Card.Text>
                    </Card.Body>
                 </Card>
            </Col>    
           <Col sm={6} md={4} >    
                <Card>
                  <Card.Img style={{height:"200px",width:"200px", margin:"auto"}} variant="top" src={image2} />
                    <Card.Body>
                      <Card.Title>Phone</Card.Title>
                        <Card.Text>
                          <p>+00144856376</p>
                        </Card.Text>
                    </Card.Body>
                 </Card>
            </Col>     
            <Col sm={6} md={4} >   
                <Card>
                  <Card.Img style={{height:"200px",width:"200px", margin:"auto"}} variant="top" src={image3} />
                    <Card.Body>
                      <Card.Title>Office Hour</Card.Title>
                        <Card.Text>
                          <p>Sunday - Friday: 11:00am Pacific 2:00pm Eastern</p>
                        </Card.Text>
                    </Card.Body>
                 </Card>
            </Col>
         </Row>  
     </div>
    );
};

export default Contact;