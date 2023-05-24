import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {getDevider} from '../../utils';
import {KeyPoints} from "../../constant/keyPoint";
import {CoursePage, constBaseUrl} from "../../constant/constant";
import CourseDetails from "../defaults/courseDetails"
import Schdule from "../defaults/schdule";
// const course = course[100]

const backgroundImage = constBaseUrl+'/images/slider/2.jpg'
export default class Hrs extends Component {
  render() {
    let {hrs} = this.props
    let course = CoursePage[hrs];
    let KeyPoint = KeyPoints[hrs];
    const isMobile = window.innerWidth <= 768;
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
            <div>
              {!isMobile ? 
                <div style={{position:"absolute", bottom:"20%", width:"40%", marginLeft:"30%", backgroundColor:"#ffffffde", textAlign:"center"}}>
                  <text style={{fontSize:"30px", fontWeight:"700", color:"#5c5889"}}>{course.title}</text>
                </div> :
                <div style={{position:"absolute", bottom:"20%", width:"100%", backgroundColor:"#ffffffde", textAlign:"center"}}>
                  <text style={{fontSize:"25px", fontWeight:"700", color:"#5c5889"}}>{course.title}</text>
                </div>
              }
            </div>
        </div>
        <div className="hrs-course">
        <div style={{padding:"10%", paddingTop:"5%", position:"relative", textAlign:"justify"}}>
          { course.descriptions.map((description, index) =>(
            <p>{description}</p>
          ))}
        </div>
        <CourseDetails index={hrs} displayTitle={false} onReadMore={()=>this.props.selectCourse(hrs)}/>
        <Schdule />
        {KeyPoint.map((obj, index) => (
          <div>
            {!isMobile ?
              <div style={{margin:"3%", paddingBottom:"1%",paddingTop:"1%", backgroundColor:"white",backgroundRepeat:"no-repeat", backgroundImage:"url('./home/bg/4.png')", display:"flex", justifyContent:"space-between"}}>
                <img src={backgroundImage} style={{width:"48%", backgroundSize: "100% 80%", padding:"3%", borderTopLeftRadius:"20%", borderBottomRightRadius:"20%"}}/>
                <div style={{width:"48%"}}>
                  <p style={{fontSize:"25px", fontWeight:"700", fontFamily:"'Poppins', sans-serif", padding:"2% 6% 0%"}}>{obj.header}</p>
                  <ul style={{listStyleType: "square", listStylePosition: "inside", padding:"0", paddingBottom:"3%", lineHeight:"3rem"}}>{obj.points.map((point, index) => ( 
                    <div>{index %2 == 0 ? <li className="point" style={{paddingLeft:"8%" ,fontSize:"18px", fontFamily:"'Poppins', sans-serif", backgroundColor:"#e5e5e5"}}>{point}</li>
                    : <li className="point" style={{paddingLeft:"8%" ,fontSize:"18px", fontFamily:"'Poppins', sans-serif", backgroundColor:"#bbbabb"}}>{point}</li>}</div>
                    ))}</ul>
                </div>
              </div> :
              <div style={{margin:"3%", paddingBottom:"1%",paddingTop:"1%", backgroundColor:"white",backgroundRepeat:"no-repeat", backgroundImage:"url('./home/bg/4.png')", display:"block", justifyContent:"space-between"}}>
                <img src={backgroundImage} style={{width:"95%", backgroundSize: "100% 80%", padding:"3%", borderTopLeftRadius:"20%", borderBottomRightRadius:"20%"}}/>
                <div style={{width:"95%"}}>
                  <p style={{fontSize:"20px", fontWeight:"600", fontFamily:"'Poppins', sans-serif", padding:"2% 6% 0%"}}>{obj.header}</p>
                  <ul style={{listStyleType: "square", listStylePosition: "inside", padding:"0", paddingBottom:"3%", lineHeight:"3rem"}}>{obj.points.map((point, index) => ( 
                    <div>{index %2 == 0 ? <li className="point" style={{paddingLeft:"8%" ,fontSize:"15px", fontFamily:"'Poppins', sans-serif", backgroundColor:"#fafafa", lineHeight:"2rem"}}>{point}</li>
                    : <li className="point" style={{paddingLeft:"8%" ,fontSize:"15px", fontFamily:"'Poppins', sans-serif", backgroundColor:"white", lineHeight:"2rem"}}>{point}</li>}</div>
                    ))}</ul>
                </div>
              </div>
            }
          </div>
        ))}
      </div>
      </div>
    );
  }
}


