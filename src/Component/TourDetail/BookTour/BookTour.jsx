import React, { useState } from "react";
import "./BookTour.css";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import CheckIcon from '@mui/icons-material/Check';

export default function BookTour() {
  const handleClickScroll = () => {
    const element = document.getElementById('form');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className="book-tour">
      <h5>Book this tour</h5>
      <Stack component="form" noValidate spacing={3} className="date">
        <TextField
          id="date"
          label="When (date)"
          type="date"
          defaultValue="2023-02-01"
          sx={{ width: "100%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>

      <div className="adults">
        <Autocomplete
          options={options}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Người lớn" variant="outlined" />
          )}
        />
      </div>
      <div className="children">
        <Autocomplete
          options={options}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Trẻ em" variant="outlined" />
          )}
        />
      </div>

      <div className="button">
       
        <button type="button" class="btn-request" onClick={handleClickScroll}>
          Đặt tour
        </button>
      </div>

      <div className="service">
        <Grid container spacing={2}>
            <Grid xs={6}>
              <CheckIcon sx={{color: "green"}}/> Bảo hiểm <br/>
              <CheckIcon sx={{color: "green"}}/> Hướng dẫn viên <br/>
              <CheckIcon sx={{color: "green"}}/> Vé máy bay <br/>
              <CheckIcon sx={{color: "green"}}/> Visa
            </Grid>
            <Grid xs={6}>
              <CheckIcon sx={{color: "green"}}/> Bữa ăn <br/>
              <CheckIcon sx={{color: "green"}}/> Khách sạn 3 sao <br/>
              <CheckIcon sx={{color: "green"}}/> Vé tham quan <br/>
              <CheckIcon sx={{color: "green"}}/> Xe đưa đón
            </Grid>
          </Grid>
      </div>
    </div>
  );
}
