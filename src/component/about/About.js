import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import image from '../../images/about-us.jpg'
import './about.css'

const About = () => {
    return (
        <div className="about">
              <h3 className="title-about">About Us</h3>
                <Container>
                <Row>
                    <Col sm={6} md={6} >
                        <div>
                            <img src={image} alt="about" />
                        </div>
                    </Col>  
                    <Col sm={4} md={6}>
                        <div>
                            <h1 className="contant">Welcome to Almanar Islamic Center for Muslims</h1>
                            <p className="description">
                            Islamic center” Is a place for the Muslim community to refresh their knowledge and non-muslims to know about Islam. It creates awareness about the Islamic lifestyle and also the teachings of the prophet Muhammad(s.a.w). The Hajj house inside the Islamic center will be more helpful and guidance for them to perform Umrah and Hajj.
                            </p>
                            <Button variant="success">More About</Button>
                        </div>
                     </Col>
                    
                </Row>
                
                </Container>
        </div>
    );
};

export default About;