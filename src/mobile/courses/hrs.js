import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {getDevider} from '../defaults/utils';
import {CoursePage, KeyPoints} from "../../constant";
import CourseDetails from "../defaults/courseDetails"

// const course = course[100]

export default class Hrs extends Component {
  render() {
    let {hrs} = this.props
    let course = CoursePage[hrs];
    let KeyPoint = KeyPoints[hrs];
    return (
      <div className="hrs-course">
        <div style={{padding:"10%", paddingTop:"5%",paddingBottom:0, position:"relative", textAlign:"center"}}>
          <img src={course.img} style={{width:"100%", height:"-webkit-fill-available", borderRadius:"2rem", boxShadow:"-5px 5px 8px 8px"}}/>
          <div style={{position:"absolute", bottom:"10%", width:"40%", marginLeft:"20%", backgroundColor:"#ffffff5e"}}>
            <text style={{fontSize:"20px", fontWeight:"700"}}>{course.title}</text>
            </div>
        </div>
        <div style={{padding:"10%", paddingTop:"5%", position:"relative", textAlign:"center"}}>
          { course.descriptions.map((description, index) =>(
            <p>{description}</p>
          ))}
        </div>
        <CourseDetails index={hrs} displayTitle={false} onReadMore={()=>this.props.selectCourse(hrs)}/>
        {KeyPoint.map((obj, index) => (<div style={{marginLeft:"5%", paddingLeft: "3%", backgroundColor:"#ffffff33", borderTopLeftRadius:"5%", boxShadow:"-5px 5px 4px 4px"}}>
          <p style={{fontSize:"25px", fontWeight:"700", fontFamily:"ui-monospace"}}>{obj.header}</p>
          <ul style={{listStyleType: "circle"}}>{obj.points.map((point, index) => ( <li className="point" style={{fontSize:"18px", fontFamily:"ui-monospace"}}>{point}</li>))}</ul>
        </div>))}
      </div>
    );
  }
}

