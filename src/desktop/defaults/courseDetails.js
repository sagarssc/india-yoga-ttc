import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { courses } from "../../constant/constant";


export default class CourseDetails extends Component {
  render() {
    const { index, displayTitle } = this.props;
    const title = courses[index].name;
    const details = courses[index].details;
    const ref_link = courses[index].link;

    return (
      <div style={{ height: "34rem", backgroundColor:"white", backgroundImage:"url('./home/bg/3.png')", backgroundPosition: "left", backgroundRepeat:"no-repeat", marginBottom: "2rem" }}>
        {displayTitle ? (
          <h2 style={{ fontSize: "2rem", fontFamily: "'Poppins', sans-serif" }}>{title}</h2>
        ) : (
          <div style={{ padding: "1.5rem" }}></div>
        )}
        <div style={{ display: "flex", width: "100%", height: "80%", paddingRight: "4%", paddingTop: "1.2%" }}>
          <div style={{ width: "50%", paddingTop: "3%", paddingLeft: "6%", paddingRight: "4%" }}>
            {details.map((detail, index) => (
              <div key={index}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: "500" }}>{detail.title}</h4>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: "500" }}>{detail.value}</h4>
                </div>
                <hr style={{ borderTop: "2px solid #5C5889" }} />
              </div>
            ))}
            {displayTitle && (
              <div style={{ height: "5rem" }}>
                <Link to={ref_link} className="link">
                  <div style={{ width: "50%", backgroundColor: "#5c5889", height: "4rem", borderRadius: "2rem", display: "inline-flex", marginTop: "1rem", boxShadow: "-2px 3px 5px 5px", justifyContent: "center", paddingTop: "2%" }}>
                    <h3 style={{ fontWeight: "700", color: "wheat" }}>Read More</h3>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="des">
            <img src={courses[index].img} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy"/>
          </div>
        </div>
      </div>
    );
  }
}
