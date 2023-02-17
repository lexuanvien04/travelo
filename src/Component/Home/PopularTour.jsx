import React, {useState, useEffect}  from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import './Home.css';
import Rating from '@mui/material/Rating'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';
import axios from "axios";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

export default function PopularTour() {
    const [isClick, setClick] = useState(false);
    const [items, setItem] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:3333/tour')
        .then(json =>{
            console.log(json.data)
          let t = json.data;
          setItem(t);
          
        })
    },[]);
  return (
    <div className="populartour">
        <div className="carousel-wrapper">
        <h1 class="heading">
            <span>P</span>
            <span>O</span>
            <span>P</span>
            <span>U</span>
            <span>L</span>
            <span>A</span>
            <span>R</span>
            <span class="space"></span>
            <span>T</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
        </h1>
        <Carousel breakPoints={breakPoints} autoPlaySpeed={3600}>
        {items.map((item, index) => (
          <Item>
          <div className="box">
            <img src={item.image} alt="" />
            <div class="content">
              <h3>
                <LocationOnIcon sx={{ color: "#48cae4" }} fontSize="15px" />{" "}
                {item.name}
              </h3>
              
              <p>
                {item.description}
              </p>
              <Rating
                name="custom-no-value"
                value={item.rating}
                sx={{ color: "#48cae4" }}
              />
              <div className="price">
                {item.discount} <span>{item.price}</span>
              </div>
              <div className="btn-button">
                <button type="button" class="btnBook">
                <Link href={"/tour-detail/"+item.id} sx={{textDecoration: "none", color: "#fff"}}>
                  Book now
                </Link>
                </button>
                <button className="btnFavorite">
                  <FavoriteBorderIcon />
                </button>
              </div>
            </div>
          </div>
        </Item>
        ))}
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
    border: 1px solid #48cae4;
    padding: 5px 20px;
    border-radius: 25px;
    margin-bottom: 15px;
    transition: transform .3s; /* Animation */
  }
  .btnBook:hover {
    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
  .btnFavorite{
    color: #48cae4;
    background-color: transparent;
    border: none;
    float: right;
    margin-right: 15px
  }
`;