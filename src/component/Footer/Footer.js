import React from 'react';
import './footer.css'
import { Col, Container,  ListGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col sm={6} md={4} >
                    <h2>Our Services</h2>
                    <ListGroup>
                        <ListGroup.Item>Quran Memorization</ListGroup.Item>
                        <ListGroup.Item>Special Child Care</ListGroup.Item>
                        <ListGroup.Item>Islamic Aqeedha</ListGroup.Item>
                        <ListGroup.Item>Islamic Song</ListGroup.Item>
                    </ListGroup>

                    </Col>  
                    <Col sm={4} md={4}>
                    <h2>Useful Links</h2>
                    <ListGroup>
                        <ListGroup.Item>Home</ListGroup.Item>
                        <ListGroup.Item>About Us</ListGroup.Item>
                        <ListGroup.Item>Services</ListGroup.Item>
                        <ListGroup.Item>Contact</ListGroup.Item>
                    </ListGroup>

                     </Col>
                    <Col sm={4} md={4}>
                      <h2>Newsletter</h2>
                      <input placeholder="email address"></input>
                    </Col>   
                </Row>
                
            </Container>
            <hr />
            <span>&copy;Copyright 2021 | Almanar | All right reserved.</span>
        </div>
    );
};

export default Footer;