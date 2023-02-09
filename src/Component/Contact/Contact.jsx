import React from "react";
import Navbar from "../Home/Navbar";
import ScrollToTop from "../Layout/ScrollToTop/ScrollToTop";
import Banner from "./Banner";
import "./Contact.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import Footer from "../Home/Footer";

export default function Contact() {
  return (
    <div className="contact">
      <ScrollToTop />
      <Navbar />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2>
              Need to contact us? Use one of the options below. Our team are
              always happy to help.
            </h2>
          </div>
        </div>

        <Grid container spacing={0.5}>
          <Grid xs={8}>
            <div className="contact-form-group">
              <h4 className="heading-title">Email us</h4>
              <p className="text">
                Drop us an email and we'll get back to you within 48hrs…
              </p>
              <form action className="form-contact">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>Full Name</label> <br />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Email</label> <br />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Contact Number</label> <br />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>What's Your Message</label> <br />
                    <textarea
                      name=""
                      id=""
                      rows="5"
                      placeholder="your message"
                    ></textarea>
                  </div>

                  <div className="col-md-12 form-group">
                    <div className="form-btn">
                      <button type="submit" className="btn">
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="contact-info">
              <h4 className="heading-title">Trip Queries</h4>
              <span className="text-editor">Emergency Helpline</span>
              <a href="tel:+0353386306" className="contact-link contact-tel">
                0353386306
              </a>
              <span className="text-editor">Contactable Hours</span>
              <div className="contact-link">Mon-Sun: 24 Hours</div>
              <span className="text-editor">
                Require information about a trip?
              </span>
              <a href="mailto:lexuanvien04@gmail.com" className="contact-link ">
                lexuanvien04@gmail.com
              </a>
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7676.168564829525!2d108.04158799999996!3d15.852167000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1675949736837!5m2!1svi!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
