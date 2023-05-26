import React, { Component } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { webRatings } from "../../constant/constant";
import "../../css/Home.css"

export default class Ratings extends Component {
  render() {
    return (
      <div>
        <div
          className="ratings"
        >
          <div
            className="rating-item"
          >
            <h3 style={{ fontSize: "22px", color: "#af9c9c", marginLeft:"auto", marginRight:"auto" }}>
              {webRatings.students.text}
            </h3>
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
              {webRatings.students.count}
            </h2>
          </div>
          {webRatings.stars.map((comp, index) => (
            <div
              key={index}
              className="rating-star"
            >
              <div
                style={{
                  backgroundImage: comp.logo,
                  width: "17%",
                  height: "70%",
                  backgroundSize: "100% 100%",
                  marginTop: "5%",
                }}
              ></div>
              <div style={{ display: "block", marginLeft: "10%" }}>
                <div style={{ fontSize: "22px", color: "#af9c9c" }}>
                  {comp.rating} / {comp.max}
                </div>
                <StarRatings
                  rating={comp.rating}
                  starRatedColor="#5c5889"
                  numberOfStars={comp.max}
                  starDimension="20px"
                  name="rating"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
