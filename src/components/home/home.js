import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./slider";
import Courses from "./courses";
import Testimonials from "./testimonial";

let getDevider = (title) => {
  return(
    <div>
    {title != "" && <p> {title} </p>} 
    <img src="/divider.png" />
    </div>
    )
}
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="slides">
          <Slider />
        </div>
        <div className="explore-courses">
          {getDevider("Explores Courses")}
          <Courses />
        </div>
        <div className="testimonials">
          {getDevider("Testimonials")}
          <Testimonials />
        </div>
      </div>
    );
  }
}


