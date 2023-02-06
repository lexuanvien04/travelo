import React, { useState } from 'react'
import "./Tour.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { RangeSlider } from '@chakra-ui/react';
import { Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';

export default function SideBar() {

  return (
    <div className="side-bar">
      <h4>Filter by</h4>
      <hr />
      <div className="filter">
        <div className="title">Price Range</div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="<100"
          name="radio-buttons-group"
        >
          <FormControlLabel value="<100" control={<Radio />} label="<100" />
          <FormControlLabel value="101-200" control={<Radio />} label="101-200" />
          <FormControlLabel value="201-500" control={<Radio />} label="201-500" />
          <FormControlLabel value=">500" control={<Radio />} label=">500" />
        </RadioGroup>
        <hr />
      </div>

      <div className="filter">
        <div className="title">Categories</div>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Adventure" />
          <FormControlLabel control={<Checkbox />} label="Beaches" />
          <FormControlLabel control={<Checkbox />} label="City Tour" />
          <FormControlLabel control={<Checkbox />} label="Hiking" />
        </FormGroup>
        <hr />
      </div>

      <div className="filter">
        <div className="title">Reviews</div>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="5 Star" />
          <FormControlLabel control={<Checkbox />} label="4 Star & Up" />
          <FormControlLabel control={<Checkbox />} label="3 Star & Up" />
          <FormControlLabel control={<Checkbox />} label="2 Star & Up" />
          <FormControlLabel control={<Checkbox />} label="1 Star & Up" />
        </FormGroup>
        <hr />
      </div>
    </div>
  );
}
