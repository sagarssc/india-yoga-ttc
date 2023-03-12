import React, { Component } from "react";
import {RetreatCoursePage, RetreatKeyPoints} from "../../constant/retreats";
import CourseDetails from "../defaults/courseDetails"
import {CoursePage, constBaseUrl} from "../../constant/constant";

const backgroundImage = constBaseUrl+'/images/slider/2.jpg'
export default class RetreatType extends Component {
  render() {
    let {type} = this.props
    let course = RetreatCoursePage[type];
    let KeyPoint = RetreatKeyPoints[type];
    return (
      <div>
         <div className="blocks">
          <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url("+backgroundImage+")",
          }}
        ></div>
          <div style={{position:"absolute", bottom:"15%", width:"40%", marginLeft:"30%", backgroundColor:"#ffffff5e", textAlign:"center"}}>
            <text style={{fontSize:"30px", fontWeight:"700", color:"gold"}}>{course.title}</text>
            </div>
        </div>
        <div className="hrs-course">
        <div style={{padding:"10%", paddingTop:"5%", position:"relative", textAlign:"justify"}}>
          { course.descriptions.map((description, index) =>(
            <p>{description}</p>
          ))}
        </div>
        <CourseDetails index={type} displayTitle={false} onReadMore={()=>this.props.selectCourse(type)}/>
        {KeyPoint.map((obj, index) => (
        // <div style={{margin:"3%", paddingBottom:"1%",paddingTop:"1%", backgroundColor:"#ffffff33", borderTopLeftRadius:"15%", borderBottomRightRadius:"15%", boxShadow:"-5px 5px 4px 4px"}}>
        <div style={{margin:"3%", paddingBottom:"1%",paddingTop:"1%", backgroundColor:"white", backgroundImage:"url('./home/bg/4.png')"}}>
          <p style={{fontSize:"25px", fontWeight:"700", fontFamily:"'Poppins', sans-serif", padding:"2% 6% 0%"}}>{obj.header}</p>
          <ul style={{listStyleType: "none", padding:"0", paddingBottom:"3%", lineHeight:"3rem"}}>{obj.points.map((point, index) => ( 
            <div>{index %2 == 0 ? <li className="point" style={{paddingLeft:"8%" ,fontSize:"18px", fontFamily:"'Poppins', sans-serif", backgroundColor:"bisque"}}>{point}</li>
            : <li className="point" style={{paddingLeft:"8%" ,fontSize:"18px", fontFamily:"'Poppins', sans-serif", backgroundColor:"cornsilk"}}>{point}</li>}</div>
            ))}</ul>
        </div>))}
      </div>
      </div>
    );
  }
}


