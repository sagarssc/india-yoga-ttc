import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./slider";
import Courses from "./courses";
import Testimonials from "./testimonial";
import {getDevider} from '../defaults/utils';
import Faq from './faq';
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="slides">
          <Slider />
        </div>
        <div className="explore-courses">
          {getDevider("Explores Courses")}
          <Courses selectCourse={(hrs)=>this.props.selectCourse(hrs)}/>
        </div>
        <div className="testimonials">
          {getDevider("FAQs")}
          <Faq />
        </div>
        <div className="testimonials">
          {getDevider("Testimonials")}
          <Testimonials />
        </div>
      </div>
    );
  }
}


