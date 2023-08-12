import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "../defaults/slider";
import ExtraDiv from "../defaults/extraDiv";
import Gallery from "../defaults/gallery";
import {extraDetailsAboutUs, teachers, constBaseUrl} from "../../constant/constant"
import HomeAbout from "../home/homeAbout";
import { AboutUs, OurTeachers } from "../../constant/home";


const backgroundImage = constBaseUrl+'/images/slider/2.jpg'
export default class About extends Component {
  
  render() {
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
        </div>
        <div className="testimonials">
          <HomeAbout aboutus={AboutUs}/>
        </div>
        <div className="common-div">
          <ExtraDiv extraDetails={extraDetailsAboutUs}/>
        </div>
        <div className="our-teachers" style={{backgroundImage:"url('/home/bg/4.png')", backgroundRepeat:"no-repeat"}}>
            <div className="heading" style={{fontSize:"25px"}}>Our Teachers</div>
            <div>
              <p style={{fontSize:"18px",padding:"2rem",textAlign:"justify",fontFamily:'Roboto Slab'}}>{OurTeachers}</p>
            </div>
            {!isMobile ? 
              <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
                {teachers.map((teacher, index) => (<div style={{width:"45%", margin:"1%", height:"auto", borderRadius:"2rem", boxShadow:"0 5px 15px #00000033"}}>
                  <div style={{backgroundImage:teacher.img, width:"90%", margin:"5%", height:"20rem", backgroundSize:"100% 100%"}}></div>
                  <div><p style={{textAlign:"center", fontSize:"larger", fontWeight:"700"}}>{teacher.name}</p></div>
                  <div><p style={{margin:"2%", padding:"2%",textAlign:"justify"}}>{teacher.description}</p></div>
                </div> ))}
              </div> :
              <div style={{display:"block", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
                {teachers.map((teacher, index) => (<div style={{width:"90%", margin:"10% auto", height:"auto", borderRadius:"2rem",boxShadow:"0 5px 15px #00000033", marginLeft:"auto", marginRight:"auto", padding:"0.8rem"}}>
                  <div style={{backgroundImage:teacher.img, width:"90%", margin:"5%", height:"10rem", backgroundSize:"100% 100%"}}></div>
                  <div><p style={{textAlign:"center", fontSize:"larger", fontWeight:"700"}}>{teacher.name}</p></div>
                  <div><p style={{margin:"2%"}}>{teacher.description}</p></div>
                </div> ))}
              </div>
            }
        </div>
        {!isMobile && <div className="common-div" style={{marginTop:0, padding:"0", paddingBottom:"3rem"}}>
          <div className="heading">Gallery</div>
          <Gallery />
        </div>}
      </div>
    );
  }
}


