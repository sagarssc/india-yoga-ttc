import React, { Component } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { webRatings } from "../../constant/constant";

export default class Ratings extends Component {
    render() {
        return (
          <div>
            <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-evenly"}}>
              <div style={{width:"25%", height:"6rem", margin:"2rem", backgroundColor:"white", paddingTop:"2%", textAlign:"center", border:"6px solid #e2dddd", borderRadius:"1rem"}}>
                <text style={{fontSize:"22px", color:"#af9c9c"}}>{webRatings.students.text}</text>
              </div>
              {webRatings.stars.map((comp, index) => (
                <div style={{width:"25%", height:"6rem", margin:"2rem", backgroundColor:"white", display:"flex", padding:"1%", border:"6px solid #e2dddd", borderRadius:"1rem"}}>
                  <div style={{backgroundImage:comp.logo, width:"17%", height:"70%", backgroundSize:"100% 100%", marginTop:"5%"}}></div>
                  <div style={{display:"block", marginLeft:"10%"}}>
                    <div style={{fontSize:"22px", color:"#af9c9c"}}> {comp.rating} / {comp.max}</div>
                    <StarRatings
                      rating={comp.rating}
                      starRatedColor="gold"
                      numberOfStars={comp.max}
                      starDimension="20px"
                      name='rating'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
}
