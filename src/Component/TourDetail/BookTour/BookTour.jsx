import React, { useState } from "react";
import "./BookTour.css";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";

export default function BookTour() {
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
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>

      <div className="adults">
        <Autocomplete
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Người lớn" variant="outlined" />
          )}
        />
      </div>
      <div className="children">
        <Autocomplete
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Trẻ em" variant="outlined" />
          )}
        />
      </div>

      <div className="button">
        <button type="button" class="btn-contact">
          Liên hệ
        </button>
        <button type="button" class="btn-request">
          Đặt tour
        </button>
      </div>
    </div>
  );
}
