import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "../defaults/slider";
import ExtraDiv from "../defaults/extraDiv";
import Gallery from "../defaults/gallery";
import {extraDetailsAboutUs} from "../../constant/constant"
import {RetreatTypes} from "../../constant/retreats"

export default class Retreat extends Component {
  render() {
    return (
      <div>
        <div className="blocks">
          <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url('/home/slide/2.jpg')",
          }}
        ></div>
        </div>
        <div className="common-div">
          <ExtraDiv extraDetails={extraDetailsAboutUs}/>
        </div>
        <div className="our-teachers" style={{backgroundImage:"url('/home/bg/header.png')"}}>
            <div className="heading">Retreats</div>
            <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
              {RetreatTypes.map((retreat, index) => (<div style={{width:"45%", margin:"1%", height:"50rem", backgroundColor:"#f1f1f1", borderRadius:"2rem"}}>
                <div style={{backgroundImage:retreat.img, width:"90%", margin:"5%", height:"20rem", backgroundSize:"100% 100%"}}></div>
                <div><p style={{textAlign:"center", fontSize:"larger", fontWeight:"700"}}>{retreat.name}</p></div>
                <div><p style={{margin:"2%"}}>{retreat.description}</p></div>
                <Link to={retreat.link} className="link"><div style={{marginLeft:"25%", width:"50%", backgroundColor:"#5c5889", height:"4rem", borderRadius:"2rem", display:"inline-flex", marginTop:"1rem", boxShadow:"-2px 3px 5px 5px", justifyContent:"center", paddingTop:"2%"}}>
                    <text style={{fontWeight:"700", color:"wheat", fontSize:"22px"}}>Read More</text>
                  </div></Link>
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


