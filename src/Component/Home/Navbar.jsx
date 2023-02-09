import React from "react";
// import styled from "styled-components";
import logo from "../../assets/logo.png";
import { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Outlet } from "react-router-dom";


const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  return(
    <MDBNavbar expand='lg'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={logo} alt="" />
          <b>Travelo</b>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/home'>
                <span style={{color: "#48cae4"}}>HOME</span>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/tour">Tour</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/blog'>Blog</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Outlet/>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
          <button className="btnSignin"><MDBNavbarLink href="/signin">SIGNIN</MDBNavbarLink></button>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
  );
}

export default Navbar;

