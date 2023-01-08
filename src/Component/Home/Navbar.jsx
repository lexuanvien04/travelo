import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container" style={{color: "#48cae4"}}>
            <img src={logo} alt="" />
            Travelo
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#services">TOUR</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#recommend">CONTACT</a>
          </li>
          <li>
            <a href="#testimonials">BLOG</a>
          </li>
        </ul>
        <button>Signin</button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-item: center;
    .brand{
        .container{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-item: center;
            gap: 0,4rem;
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase
        }
        .toggle{
            display: none;
        }
    }
    ul{
        display: flex;
        list-style-type: none;
        gap: 3rem;
        font-size: 17px;
        
        li{
            a{
                text-decoration: none;
                color: #48cae4;
                font-weight: 600;
                transition: 0ms.1s ease-in-out;
                &:hover {
                    color:#023e8a;
                }
            }
            &:first-of-type{
                a{
                    color: #023e8a;
                    font-weight: 900
                }
            }
        }
    }
    button{
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: white;
        background-color: #48cae4;  
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        transition: 0.3s ease-in-out;
        &hover{
            background-color: #023e8a;
        }
    }
`;
