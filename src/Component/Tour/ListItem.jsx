import React from "react";
import "./Tour.css";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";
import Grid from "@mui/material/Grid"; // Grid version 1
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ListItem() {
  return (
    <div className="list-item">
      <p>20 tour</p>
      <div className="item">
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={4}>
            <Item>
              <div className="box">
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <div class="content">
                  <h3>
                    <LocationOnIcon sx={{ color: "#48cae4" }} fontSize="15px" />{" "}
                    Đà Nẵng
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </p>
                  <Rating
                    name="custom-no-value"
                    value={3}
                    sx={{ color: "#48cae4" }}
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
          </Grid>
          <Grid xs={4}>
            <Item>
              <div className="box">
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <div class="content">
                  <h3>
                    <LocationOnIcon sx={{ color: "#48cae4" }} fontSize="15px" />{" "}
                    Đà Nẵng
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </p>
                  <Rating
                    name="custom-no-value"
                    value={3}
                    sx={{ color: "#48cae4" }}
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
          </Grid>
          <Grid xs={4}>
            <Item>
              <div className="box">
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <div class="content">
                  <h3>
                    <LocationOnIcon sx={{ color: "#48cae4" }} fontSize="15px" />{" "}
                    Đà Nẵng
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </p>
                  <Rating
                    name="custom-no-value"
                    value={3}
                    sx={{ color: "#48cae4" }}
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
          </Grid>

          <Grid xs={4}>
            <Item>
              <div className="box">
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <div class="content">
                  <h3>
                    <LocationOnIcon sx={{ color: "#48cae4" }} fontSize="15px" />{" "}
                    Đà Nẵng
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </p>
                  <Rating
                    name="custom-no-value"
                    value={3}
                    sx={{ color: "#48cae4" }}
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
          </Grid>

          <Grid xs={4}>
            <Item>
              <div className="box">
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <div class="content">
                  <h3>
                    <LocationOnIcon sx={{ color: "#48cae4" }} fontSize="15px" />{" "}
                    Đà Nẵng
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </p>
                  <Rating
                    name="custom-no-value"
                    value={3}
                    sx={{ color: "#48cae4" }}
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
          </Grid>

          <Grid xs={4}>
            <Item>
              <div className="box">
                <img src="https://picsum.photos/800/600?random=3" alt="" />
                <div class="content">
                  <h3>
                    <LocationOnIcon sx={{ color: "#48cae4" }} fontSize="15px" />{" "}
                    Đà Nẵng
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nam!
                  </p>
                  <Rating
                    name="custom-no-value"
                    value={3}
                    sx={{ color: "#48cae4" }}
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
          </Grid>
        </Grid>
      </div>
        <div className="pager">
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" />
            </Stack>
        </div>
    </div>
  );
}

const Item = styled.div`
  display: flex;
  height: auto;
  width: auto;
  background-color: #fff;
  color: #000;
  margin: 10%;
  border-radius: 2%;
  box-shadow: 0 3px 20px -5px grey;
  button {
    background-color: #023e8a;
  }
  img {
    width: 100%;
  }
  .box .content {
    text-align: left;
    margin-left: 13px;
    margin-top: 10px;
  }
  .content h3 {
    color: #48cae4;
  }
  .content p {
    margin-bottom: 8px;
  }
  .price {
    margin: 8px 0;
    font-size: 20px;
    font-weight: 600;
  }
  .price span {
    color: grey;
    text-decoration-line: line-through;
    font-size: 15px;
  }
  .btnBook {
    background-color: #48cae4;
    color: #fff;
    border: none;
    padding: 5px 20px;
    border-radius: 5%;
    margin-bottom: 10px;
  }
  .btnFavorite {
    color: #48cae4;
    background-color: transparent;
    border: none;
    float: right;
    margin-right: 15px;
  }
`;
