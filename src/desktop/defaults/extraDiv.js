import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { extraDetails } from "../../constant/constant";
import { social_images } from "../../constant/default";

export default class ExtraDiv extends Component {
  render() {
      let {extraDetails} = this.props
        return (
          <div>
          {extraDetails.map((details,index) => (
            <div>{index % 2===0 ? <div
            style={{
              backgroundColor:"white",
              backgroundImage:"url('./home/bg/2.png')",
              backgroundPosition:"top right",
              backgroundRepeat:"no-repeat",
              marginBottom: "2rem",
              display:"flex"
            }}>
              <div style={{width:"45%", margin:"2%"}}><img src={details.img} className="left-image"/></div>
              <div style={{width:"55%", margin:"2%"}}>
                <p style={{fontSize:"32px", fontWeight:"500", fontFamily:"Poppins"}}>{details.heading }</p>
                <p style={{fontSize:"20px", fontWeight:"300", fontFamily:"Poppins"}}>{details.content }</p>
                {details.social &&<div style={{width:"100%", height:"40%", marginTop:"10%", paddingTop:"10%", display:"inline-flex", justifyContent:"space-around"}}>
                  {social_images.map((social, index) =>(
                    <div>
                      <a href={social.url} target="_blank" className="link"><img src={social.img} style={{height:"50%"}}/></a>
                    </div>
                  ))}
                </div>}
                </div>
            </div> :
            <div
            style={{
              height: "32rem",
              backgroundColor:"white",
              backgroundImage:"url('./home/bg/3.png')",
              backgroundPosition:"top left",
              backgroundRepeat:"no-repeat",
              marginBottom: "2rem",
              display:"flex"
            }}>
              <div style={{width:"55%", margin:"2%"}}>
                <p style={{fontSize:"32px", fontWeight:"500", fontFamily:"Poppins"}}>{details.heading }</p>
                <p style={{fontSize:"20px", fontWeight:"300", fontFamily:"Poppins"}}>{details.content }</p>
                {details.social &&<div style={{width:"100%", height:"40%", marginTop:"10%", paddingTop:"10%", display:"inline-flex", justifyContent:"space-around"}}>
                  {social_images.map((social, index) =>(
                    <div>
                      <a href={social.url} target="_blank" className="link"><img src={social.img} style={{height:"50%"}}/></a>
                    </div>
                  ))}
                </div>}
              </div>
              <div style={{width:"45%", margin:"2%"}}><img src={details.img} className="right-image"/></div>
            </div>}</div>
          ))}
        </div>
        );
    }
}
