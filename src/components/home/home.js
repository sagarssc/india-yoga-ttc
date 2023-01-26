import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./slider";
import Courses from "./courses";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="slides">
          <Slider />
        </div>
        <div className="explore-courses">
          <p> Explores Courses</p>
            <img src="/divider.png"/>
            <Courses />
        </div>
      </div>
    );
  }
}
