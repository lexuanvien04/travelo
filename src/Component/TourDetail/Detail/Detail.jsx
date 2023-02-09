import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Detail.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookForm from "./BookForm";

export default function Detail() {
  return (
    <div className="detail">
      <div className="location">
        <div className="address">
          <i>Sigiriya, Colombo</i>
        </div>
        <div className="favorite">
          <FavoriteBorderIcon /> <i>Add to wishlist</i>
        </div>
      </div>
      <div className="title">Broome to the Bungle Bungles</div>

      <Box className="box-grid">
        <Grid container spacing={0.5} className="grid ">
          <Grid item xs={1} className="line">
            <label><i>From</i></label>
            <br />
            <span>$230</span>
          </Grid>
          <Grid item xs={1.5} className="line">
            <label><i>From</i></label>
            <br />
            <span>6 day</span>
          </Grid>
          <Grid item xs={1.5} className="line">
            <label><i>Max people</i></label>
            <br />
            <span>100</span>
          </Grid>
          <Grid item xs={1.5} className="line">
            <label><i>min Age</i></label>
            <br />
            <span>10+</span>
          </Grid>
          <Grid item xs={3.5} className="line">
            <label><i>Your type</i></label>
            <br />
            <span>Honeymoon , Museum Tours</span>
          </Grid>
          <Grid item xs={2.5} className="text-center">
            <label><i>Reviews</i></label>
            <br />
            <span>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "20px", marginLeft: "55px" }}
                />
              </Stack>
            </span>
          </Grid>
        </Grid>
      </Box>

      <div className="gallery">
        <Carousel showArrows={true} thumbWidth="150px">
          <div>
            <img src="https://zourney.webtravel.vn/images/tour_3-1024x650.jpg" />
          </div>
          <div>
            <img src="https://zourney.webtravel.vn/images/tour_4-1024x650.jpg" />
          </div>
          <div>
            <img src="https://zourney.webtravel.vn/images/tour_5-1024x650.webp" />
          </div>
          <div>
            <img src="https://zourney.webtravel.vn/images/tour_6-1024x650.jpg" />
          </div>
          <div>
            <img src="https://zourney.webtravel.vn/images/tour_1-1024x650.jpg" />
          </div>
          <div>
            <img src="https://zourney.webtravel.vn/images/tour_2-1024x650.jpg" />
          </div>
        </Carousel>
      </div>
      <div className="tabs">
        <input id="tab1" type="radio" name="tabs" defaultChecked />
        <label htmlFor="tab1">Overview</label>
        <input id="tab2" type="radio" name="tabs" />
        <label htmlFor="tab2">Tour plan</label>
        <input id="tab3" type="radio" name="tabs" />
        <label htmlFor="tab3">Location</label>
        <input id="tab4" type="radio" name="tabs" />
        <label htmlFor="tab4">Reviews</label>
        <div id="content1">
          <h3>Description</h3>
          <p>
            All our Deluxe rooms have big windows to help you take a broad view
            of the cityscape and nature. We offer bigger bed and every bathroom
            has bathtub and shower, which brings relaxation to you after a long
            day. Fast WIFI connection, satelite TV and international standard
            electric socket are standard throughout Hotel. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit A wonderful serenity has taken possession of my entire soul,
            like these sweet mornings of spring which I enjoy with my whole
            heart. I am alone, and feel the charm of existence in this spot,
            which was created for the bliss of souls like mine. I am so happy,
            my dear friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment; and yet I feel that I
            never was a greater artist than now. I should be incapable of
            drawing a single stroke at the present moment; and yet I feel that I
            never was a greater artist than now. When, while the lovely valley
            teems with vapour around me, and the meridian sun strikes the upper
            surface of the impenetrable foliage of my trees, and but a few stray
            gleams steal into the inner sanctuary, I throw myself down among the
            tall grass by the trickling stream; and, as I lie close to the
            earth, a thousand unknown plants are noticed by me: when I hear the
            buzz of the little world among the stalks, and grow familiar with
            the countless indescribable forms of the insects and
          </p>
        </div>
        <div id="content2">
          <h3>Tour plan</h3>
          <div className="note">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h5>
                    Day 1: <span>Welcome to Edinburgh</span>
                  </h5>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get lost in the narrow lanes of Edinburgh – the Scottish
                  capital with a mystical air that combines ancient heritage
                  with the verve of a modern city. Spend your day at leisure
                  delving into its rich history and embracing the warm culture
                  of the Scots, before joining your travel companions and Travel
                  Director for a Welcome Reception with a light meal and drinks
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <h5>
                    Day 2: <span>Venture into the Scottish Highlands</span>
                  </h5>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get lost in the narrow lanes of Edinburgh – the Scottish
                  capital with a mystical air that combines ancient heritage
                  with the verve of a modern city. Spend your day at leisure
                  delving into its rich history and embracing the warm culture
                  of the Scots, before joining your travel companions and Travel
                  Director for a Welcome Reception with a light meal and drinks
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h5>
                    Day 3:{" "}
                    <span>
                      Explore Culloden, Loch Ness and the Isle of Skye
                    </span>
                  </h5>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get lost in the narrow lanes of Edinburgh – the Scottish
                  capital with a mystical air that combines ancient heritage
                  with the verve of a modern city. Spend your day at leisure
                  delving into its rich history and embracing the warm culture
                  of the Scots, before joining your travel companions and Travel
                  Director for a Welcome Reception with a light meal and drinks
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h5>
                    Day 4:{" "}
                    <span>
                      Explore Culloden, Loch Ness and the Isle of Skye
                    </span>
                  </h5>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get lost in the narrow lanes of Edinburgh – the Scottish
                  capital with a mystical air that combines ancient heritage
                  with the verve of a modern city. Spend your day at leisure
                  delving into its rich history and embracing the warm culture
                  of the Scots, before joining your travel companions and Travel
                  Director for a Welcome Reception with a light meal and drinks
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h5>
                    Day 5: <span>Journey to Thriving Glasgow</span>
                  </h5>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get lost in the narrow lanes of Edinburgh – the Scottish
                  capital with a mystical air that combines ancient heritage
                  with the verve of a modern city. Spend your day at leisure
                  delving into its rich history and embracing the warm culture
                  of the Scots, before joining your travel companions and Travel
                  Director for a Welcome Reception with a light meal and drinks
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h5>
                    Day 6: <span>Journey to Thriving Glasgow</span>
                  </h5>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get lost in the narrow lanes of Edinburgh – the Scottish
                  capital with a mystical air that combines ancient heritage
                  with the verve of a modern city. Spend your day at leisure
                  delving into its rich history and embracing the warm culture
                  of the Scots, before joining your travel companions and Travel
                  Director for a Welcome Reception with a light meal and drinks
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div id="content3">
          <h3>Location</h3>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15352.866610572803!2d108.05375067973732!3d15.845206480586844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314201f675b2c8c7%3A0xadf0dbbc7f087826!2zQ2jhu6MgxJDhuqFpIE1pbmg!5e0!3m2!1svi!2s!4v1675160103162!5m2!1svi!2s"
              width="100%"
              height="640px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </p>
        </div>
        <div id="content4">
          <h3>Review</h3>
          <p>
            Vivamus convallis lectus lobortis dapibus ultricies. Sed fringilla
            vitae velit id rutrum. Maecenas metus felis, congue ut ante vitae,
            porta cursus risus. Nulla facilisi. Praesent vel ligula et erat
            euismod luctus. Etiam scelerisque placerat dapibus. Vivamus a mauris
            gravida urna mattis accumsan. Duis sagittis massa vel elit
            tincidunt, sed molestie lacus dictum. Mauris elementum, neque eu
            dapibus gravida, eros arcu euismod metus, vitae porttitor nibh elit
            at orci. Vestibulum laoreet id nulla sit amet mattis.
          </p>
        </div>
      </div>
      <div id="form">
        <BookForm />
      </div>
    </div>
  );
}
