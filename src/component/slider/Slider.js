import React from 'react';

import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/5622180.jpg'
import slider2 from '../../images/slider/29513.jpg'
import slider3 from '../../images/slider/sunset.jpg'


const Slider = () => {
    return (
      <div >  
        <Carousel>
        <Carousel.Item interval={1000}>
          <img style={{maxHeight:"500px"}}
            className=" d-block w-100 "
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img style={{maxHeight:"500px"}}
            className=" d-block w-100 "
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{maxHeight:"500px"}}
            className="img-fluid d-block w-100"
            src={slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div> 
    );
};

export default Slider;