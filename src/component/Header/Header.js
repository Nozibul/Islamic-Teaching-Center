import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../images/quran.png'

const Header = () => {

    const  activeStyle={
        fontWeight: "bold",
        color: "blue"
      }
    return (
        <div className="header-area">

            <div className="title">
              <img style={{width:"70px", height:"40px"}}src={logo} alt="" />
               <p>Islamic Teaching Center</p>
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