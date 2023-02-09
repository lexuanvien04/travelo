import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import "./Tour.css";
import Hero from "../Home/Hero";
import Grid from "@mui/material/Grid"; // Grid version 1
import SideBar from "./SideBar";
import ListItem from "./ListItem"
import ScrollToTop from "../Layout/ScrollToTop/ScrollToTop";


export default function Tour() {
  return (
    <div className="tour">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <div className="list-tour">
        <Grid container spacing={2}>
          <Grid xs={2.5}>
            <SideBar/>
          </Grid>
          <Grid xs={9.5}>
            <ListItem/>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
