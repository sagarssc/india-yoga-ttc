import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "../defaults/slider";
import Courses from "./courses";
import Testimonials from "./testimonial";
import {getDevider} from '../../utils';
import Faq from './faq';
import QuickLink from "./quickLink";
import ExtraDiv from "../defaults/extraDiv";
import { extraDetailsHome } from "../../constant/constant";
import CircularDiv from "../defaults/circularDiv";
import HomeAbout from "./homeAbout";
import TransparentDiv from "../defaults/transparentDiv";
import Ratings from "../defaults/ratings";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="blocks" style={{height: "auto"}}>
          <Slider />
        </div>
        <div className="testimonials">
          <HomeAbout />
        </div>
        <div style={{backgroundImage:"url('https://d2rfai7fb7k0t1.cloudfront.net/images/home/bg/IMG_5008.JPG')", width:"100%", height:"25rem", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
          <TransparentDiv />
        </div>
        <div className="blocks">
          <QuickLink />
        </div>
        <div className="explore-courses">
          <Courses selectCourse={(hrs)=>this.props.selectCourse(hrs)}/>
        </div>
        <div className="common-div">
          <ExtraDiv extraDetails={extraDetailsHome}/>
        </div>
        <div className="testimonials transparent-div">
          <CircularDiv />
        </div>
        <div className="testimonials">
          <Faq />
        </div>
        <div className="testimonials">
          <Testimonials />
        </div>
        <div className="online-review-block">
          <Ratings />
        </div>
      </div>
    );
  }
}


