import React from 'react'
import './Home.css';
import PublicIcon from '@mui/icons-material/Public';    
import PaidIcon from '@mui/icons-material/Paid';
import PlaceIcon from '@mui/icons-material/Place';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function Services() {
  return (
    <div className="services">
        <h1 class="heading">
            <span>S</span>
            <span>E</span>
            <span>R</span>
            <span>V</span>
            <span>I</span>
            <span>C</span>
            <span>E</span>
            <span>S</span>
        </h1>
        <div class="box-container">

        <div class="box">
            <PublicIcon sx={{color: "#48cae4", fontSize: "3.5rem"}}/>
            <h3>Diverse Destinations</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <PaidIcon sx={{color: "#48cae4", fontSize: "3.5rem"}}/>
            <h3>Value for Money</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <PlaceIcon sx={{color: "#48cae4", fontSize: "3.5rem"}}/>
            <h3>Beautifyl Place</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <CreditScoreIcon sx={{color: "#48cae4", fontSize: "3.5rem"}}/>
            <h3>Fast Booking</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <WhereToVoteIcon sx={{color: "#48cae4", fontSize: "3.5rem"}}/>
            <h3>Passionate Travel</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <PeopleAltIcon sx={{color: "#48cae4", fontSize: "3.5rem"}}/> 
            <h3>Support Team</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>

    </div>
    </div>
  )
}
