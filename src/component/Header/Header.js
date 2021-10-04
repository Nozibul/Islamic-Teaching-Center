import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {

    const  activeStyle={
        fontWeight: "bold",
        color: "blue"
      }
    return (
        <div className="header-area">

            <div className="title">
               <h3>Islamic Teaching Center</h3>
            </div>
            <Navbar className="nav-menu" >
                
                <Nav className=" m-auto mt-2 mb-2 navlink">
                  <NavLink className="nav1" to="/home" activeStyle={activeStyle}>Home</NavLink>
                  <NavLink className="nav1" to="/about" activeStyle={activeStyle}>About</NavLink>
                  <NavLink className="nav1" to="/services" activeStyle={activeStyle}>Services</NavLink>
                  <NavLink className="nav1" to="/contact" activeStyle={activeStyle}>Contact</NavLink>
                </Nav>
              
             </Navbar>
            
        </div>
    );
};

export default Header;