import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { extraDetails, social_images } from "../../constant/constant";

function description(text, heading) {
  return (
            <div className="circle" style={{display:"flex", boxShadow:".5rem .5rem .5rem .5rem rgb(0 0 0 / 64%)"}}>
                <div style={{width:"20%", paddingTop:"1rem"}}><img src="./icons/s-icon.png" style={{width:"100%"}}/></div>
                <div style={{width:"80%", textAlign:"left", lineHeight:"20px"}}>
                  <div style={{marginTop:"4%"}}><text style={{fontSize:"24px", fontWeight:"700", fontFamily:"'Poppins', sans-serif"}}>{heading}</text></div>
                  <text style={{fontSize:"20px"}}>{text}</text>
                </div>
            </div>
  )
}

const heading = "Yoga Asana"
const line = "The Yoga Trainings practice of Aasanas and pranayama is imperative for a Yogi to fortify the mind, body, and soul."

export default class CircularDiv extends Component {
  render() {
      let {extraDetails} = this.props
        return (
          <div style={{backgroundColor:"#ffffff00" ,backgroundImage:"url('./home/bg/2.png')", backgroundRepeat:"no-repeat", backgroundAttachment:"scroll", backgroundPosition:"center", paddingBottom:"2%"}}>
            <div className="first-line">
              {description(line, heading)}
            </div>
            <div className="double-circle">
              <div style={{width:"40%"}}>
                {description(line, heading)}
              </div>
              <div style={{width:"40%"}}>
                {description(line, heading)}
              </div>
            </div>
            <div className="double-circle">
              <div style={{width:"40%"}}>
                {description(line, heading)}
              </div>
              <div style={{width:"40%"}}>
                {description(line)}
              </div>
            </div>
            <div className="first-line">
              {description(line, heading)}
            </div>
          </div>
        );
    }
}
