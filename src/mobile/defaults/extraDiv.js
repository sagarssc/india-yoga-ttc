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
            <div>
              <div style={{
              backgroundColor:"white",
              backgroundImage:"url('./home/bg/2.png')",
              backgroundPosition:"top right",
              backgroundRepeat:"no-repeat",
              margin: "2rem",
              display:"block"
            }}>
              <div style={{width:"100%", margin:"5%"}}>
                <p style={{fontSize:"32px", fontWeight:"500", fontFamily:"Poppins"}}>{details.heading }</p>
                <div style={{width:"90%", marginTop:"5%", marginBottom:"5%"}}><img src={details.img} className="left-image"/></div>
                <p style={{fontSize:"18px", fontWeight:"300", fontFamily:"Poppins", textAlign:"justify"}}>{details.content }</p>
                {details.social &&<div style={{width:"100%", height:"40%", marginTop:"5%", paddingTop:"5%", display:"inline-flex", justifyContent:"space-around"}}>
                  {social_images.map((social, index) =>(
                    <div>
                      <a href={social.url} target="_blank" className="link"><img src={social.img} style={{height:"50%"}}/></a>
                    </div>
                  ))}
                </div>}
                </div>
            </div> 
            </div>
          ))}
        </div>
        );
    }
}
