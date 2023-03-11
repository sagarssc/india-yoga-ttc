import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "../defaults/slider";
import ExtraDiv from "../defaults/extraDiv";
import Gallery from "../defaults/gallery";
import {extraDetailsAboutUs, teachers, constBaseUrl} from "../../constant/constant"

const backgroundImage = constBaseUrl+'/images/slider/2.jpg'
export default class About extends Component {
  render() {
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
        </div>
        <div className="common-div">
          <ExtraDiv extraDetails={extraDetailsAboutUs}/>
        </div>
        <div className="our-teachers" style={{backgroundImage:"url('/home/bg/header.png')"}}>
            <div className="heading">Our Teachers</div>
            <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
              {teachers.map((teacher, index) => (<div style={{width:"45%", margin:"1%", height:"42rem", backgroundColor:"#f1f1f1", borderRadius:"2rem"}}>
                <div style={{backgroundImage:teacher.img, width:"90%", margin:"5%", height:"20rem", backgroundSize:"100% 100%"}}></div>
                <div><p style={{textAlign:"center", fontSize:"larger", fontWeight:"700"}}>{teacher.name}</p></div>
                <div><p style={{margin:"2%"}}>{teacher.description}</p></div>
              </div> ))}
            </div>
        </div>
        <div className="common-div" style={{marginTop:0, backgroundColor:"white", padding:"0", marginBottom:"5rem"}}>
          <div className="heading">Gallery</div>
          <Gallery />
        </div>
      </div>
    );
  }
}


