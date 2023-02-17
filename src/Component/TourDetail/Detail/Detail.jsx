import React, {useState, useEffect} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Detail.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from '@mui/material/Rating'
import Stack from "@mui/material/Stack";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookForm from "./BookForm";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {
  let params = useParams();
    const [detail, setDetail]= React.useState();

    React.useEffect(()=>{
        let id = params.id;
        axios.get('http://localhost:3333/tour/'+id)
        .then(json=>{
            console.log(json.data)
            let t = json.data;
            setDetail(t);
        })
       },[]);


  return (
    <div className="detail">
          <div className="location">
            <div className="address">
              <i>Khởi hành: {detail?.start}</i>
            </div>
            <div className="favorite">
              <FavoriteBorderIcon /> <i>Lưu tour</i>
            </div>
          </div>
          <div className="title">{detail?.name}</div>

          <Box className="box-grid">
            <Grid container spacing={0.5} className="grid ">
              <Grid item xs={1.5} className="line">
                <label><i>Giá</i></label>
                <br />
                <span>{detail?.discount}</span>
              </Grid>
              <Grid item xs={1.5} className="line">
                <label><i>Thời gian</i></label>
                <br />
                <span>{detail?.days}</span>
              </Grid>
              <Grid item xs={1.5} className="line">
                <label><i>Số lượng người</i></label>
                <br />
                <span>{detail?.people}</span>
              </Grid>
              <Grid item xs={1.5} className="line">
                <label><i>min Age</i></label>
                <br />
                <span>10+</span>
              </Grid>
              <Grid item xs={2.5} className="line">
                <label><i>Ngày khởi hành</i></label>
                <br />
                <span>Hàng ngày</span>
              </Grid>
              <Grid item xs={3} className="text-center">
                <label><i>Reviews</i></label>
                <br />
                <span>
                  <Stack spacing={1}>
                    <Rating
                        name="custom-no-value"
                        value={detail?.rating}
                        sx={{ justifyContent: "center" }}
                    />
                  </Stack>
                </span>
              </Grid>
            </Grid>
          </Box>

          <div className="gallery">
            <Carousel showArrows={true} thumbWidth="150px">
              <div>
                <img src={detail?.image} />
              </div>
              
            </Carousel>
          </div>
          <div className="tabs">
            <input id="tab1" type="radio" name="tabs" defaultChecked />
            <label htmlFor="tab1">Giới thiệu</label>
            <input id="tab2" type="radio" name="tabs" />
            <label htmlFor="tab2">Lịch trình</label>
            <input id="tab3" type="radio" name="tabs" />
            <label htmlFor="tab3">Vị trí</label>
            <input id="tab4" type="radio" name="tabs" />
            <label htmlFor="tab4">Đánh giá</label>
            <div id="content1">
              <h3>Giới thiệu</h3>
              <p>{detail?.overview}</p>
            </div>
            <div id="content2">
              <h3>Lịch trình</h3>
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
              <h3>Vị trí</h3>
              <p>
                <iframe
                  src={detail?.location}
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
              <h3>Đánh giá</h3>
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
