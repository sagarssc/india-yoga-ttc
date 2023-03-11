import React, { Component } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { webRatings } from "../../constant/constant";

export default class Ratings extends Component {
    render() {
        return (
          <div>
            <div style={{display:"block", flexWrap:"wrap", alignItems:"center", justifyContent:"space-evenly"}}>
              <div style={{width:"80%", height:"6rem", margin:"2rem", backgroundColor:"white", textAlign:"center", border:"6px solid #e2dddd", borderRadius:"1rem"}}>
                <div style={{fontSize:"22px", color:"#af9c9c", margin:"auto"}}>{webRatings.students.text}</div>
              </div>
              {webRatings.stars.map((comp, index) => (
                <div style={{width:"80%",padding:"auto", height:"6rem", margin:"2rem", backgroundColor:"white", display:"flex", padding:"1%", border:"6px solid #e2dddd", borderRadius:"1rem"}}>
                  <div style={{backgroundImage:comp.logo, width:"17%", height:"70%", backgroundSize:"100% 100%", margin:"auto"}}></div>
                  <div style={{display:"block", margin:"auto"}}>
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
