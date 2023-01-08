import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Rating from '@mui/material/Rating'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

export default function NewTour() {
  return (
    <div className="newtour">
      <div className="carousel-wrapper">
        <h1 class="heading">
          <span>N</span>
          <span>E</span >
          <span>W</span>
          <span class="space"></span>
          <span>T</span>
          <span>O</span>
          <span>U</span>
          <span>R</span>
        </h1>
        <Carousel breakPoints={breakPoints} autoPlaySpeed={3600}>
          <Item>
            <div className="box">
              <img src="https://picsum.photos/800/600?random=3" alt="" />
              <div class="content">
                <h3>
                  <LocationOnIcon sx={{color: "#48cae4"}} fontSize="15px"/> Đà Nẵng
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, nam!
                </p>
                <Rating
                  name="custom-no-value"
                  value={3}
                  sx={{color: "#48cae4"}}
                />
                <div className="price">
                  $90.00 <span>$120.00</span>
                </div>
                <div className="btn-button">
                  <button type="button" class="btnBook">
                    Book now
                  </button>
                  <button className="btnFavorite">
                    <FavoriteBorderIcon />
                  </button>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="box">
              <img src="https://picsum.photos/800/600?random=3" alt="" />
              <div class="content">
                <h3>
                  <LocationOnIcon sx={{color: "#48cae4"}} fontSize="15px"/> Đà Nẵng
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, nam!
                </p>
                <Rating
                  name="custom-no-value"
                  value={3}
                  sx={{color: "#48cae4"}}
                />
                <div className="price">
                  $90.00 <span>$120.00</span>
                </div>
                <div className="btn-button">
                  <button type="button" class="btnBook">
                    Book now
                  </button>
                  <button className="btnFavorite">
                    <FavoriteBorderIcon />
                  </button>
                </div>
              </div>
            </div>
          </Item>

          <Item>
            <div className="box">
              <img src="https://picsum.photos/800/600?random=3" alt="" />
              <div class="content">
                <h3>
                  <LocationOnIcon sx={{color: "#48cae4"}} fontSize="15px"/> Đà Nẵng
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, nam!
                </p>
                <Rating
                  name="custom-no-value"
                  value={3}
                  sx={{color: "#48cae4"}}
                />
                <div className="price">
                  $90.00 <span>$120.00</span>
                </div>
                <div className="btn-button">
                  <button type="button" class="btnBook">
                    Book now
                  </button>
                  <button className="btnFavorite">
                    <FavoriteBorderIcon />
                  </button>
                </div>
              </div>
            </div>
          </Item>

          <Item>
            <div className="box">
              <img src="https://picsum.photos/800/600?random=3" alt="" />
              <div class="content">
                <h3>
                  <LocationOnIcon sx={{color: "#48cae4"}} fontSize="15px"/> Đà Nẵng
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, nam!
                </p>
                <Rating
                  name="custom-no-value"
                  value={3}
                  sx={{color: "#48cae4"}}
                />
                <div className="price">
                  $90.00 <span>$120.00</span>
                </div>
                <div className="btn-button">
                  <button type="button" class="btnBook">
                    Book now
                  </button>
                  <button className="btnFavorite">
                    <FavoriteBorderIcon />
                  </button>
                </div>
              </div>
            </div>
          </Item>

          <Item>
            <div className="box">
              <img src="https://picsum.photos/800/600?random=3" alt="" />
              <div class="content">
                <h3>
                  <LocationOnIcon sx={{color: "#48cae4"}} fontSize="15px"/> Đà Nẵng
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, nam!
                </p>
                <Rating
                  name="custom-no-value"
                  value={3}
                  sx={{color: "#48cae4"}}
                />
                <div className="price">
                  $90.00 <span>$120.00</span>
                </div>
                <div className="btn-button">
                  <button type="button" class="btnBook">
                    Book now
                  </button>
                  <button className="btnFavorite">
                    <FavoriteBorderIcon />
                  </button>
                </div>
              </div>
            </div>
          </Item>

          <Item>
            <div className="box">
              <img src="https://picsum.photos/800/600?random=3" alt="" />
              <div class="content">
                <h3>
                  <LocationOnIcon sx={{color: "#48cae4"}} fontSize="15px"/> Đà Nẵng
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, nam!
                </p>
                <Rating
                  name="custom-no-value"
                  value={3}
                  sx={{color: "#48cae4"}}
                />
                <div className="price">
                  $90.00 <span>$120.00</span>
                </div>
                <div className="btn-button">
                  <button type="button" class="btnBook">
                    Book now
                  </button>
                  <button className="btnFavorite">
                    <FavoriteBorderIcon />
                  </button>
                </div>
              </div>
            </div>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}

const Item = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  background-color: #fff;
  color: #000;
  margin: 10%;
  border-radius: 2%;
  box-shadow: 0 3px 20px -5px grey;
  button{
    background-color: #023e8a;
  }
  img {
    width: 100%;
  }
  .box .content{
    text-align: left;
    margin-left: 13px;
    margin-top: 10px;
  }
  .content h3{
    color: #48cae4;
    
  }
  .content p{
    margin-bottom: 8px;
  }
  .price{
    margin: 8px 0;
    font-size: 20px;
    font-weight: 600;
  }
  .price span{
    color: grey;
    text-decoration-line: line-through;
    font-size: 15px;
  }
  .btnBook{
    background-color: #48cae4;
    color: #fff;
    border: none;
    padding: 5px 20px;
    border-radius: 5%;
    margin-bottom: 10px;
  }
  .btnFavorite{
    color: #48cae4;
    background-color: transparent;
    border: none;
    float: right;
    margin-right: 15px
  }
`;