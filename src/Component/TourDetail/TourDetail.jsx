import React from "react";
import Navbar from "../Home/Navbar";
import "./TourDetail.css";
import Banner from "./Banner";
import Grid from "@mui/material/Grid"; // Grid version 1
import Footer from "../Home/Footer";
import Detail from "./Detail/Detail";
import BookTour from "./BookTour/BookTour";
import ScrollToTop from "../Layout/ScrollToTop/ScrollToTop";

export default function TourDetail() {
  return (
    <div className="tour-detail">
      <ScrollToTop />
      <Navbar />
      <Banner />
      <div className="row">
        <Grid container spacing={0.5}>
          <Grid xs={9}>
            <Detail/>
          </Grid>
          <Grid xs={3}>
            <BookTour />
          </Grid>
        </Grid>
      </div>
      
      <Footer/>
    </div>
  );
}
