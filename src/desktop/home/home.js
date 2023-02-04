import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./slider";
import Courses from "./courses";
import Testimonials from "./testimonial";
import {getDevider} from '../defaults/utils';
import Faq from './faq';
import QuickLink from "./quickLink";
import ExtraDiv from "../defaults/extraDiv";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="blocks">
          <Slider />
        </div>
        <div className="blocks">
          <QuickLink />
        </div>
        <div className="explore-courses">
          <Courses selectCourse={(hrs)=>this.props.selectCourse(hrs)}/>
        </div>
        <div className="common-div">
          <ExtraDiv />
        </div>
        <div className="testimonials">
          <Faq />
        </div>
        <div className="testimonials">
          {/* {getDevider("Testimonials")} */}
          <Testimonials />
        </div>
      </div>
    );
  }
}


