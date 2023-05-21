import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "../defaults/slider";
import ExtraDiv from "../defaults/extraDiv";
import Gallery from "../defaults/gallery";
import {contactus, icons, social_images} from "../../constant/default"
// import {Mailto} from "../../utils"
import MapComponent from '../defaults/googleMap'
import QueryForm from '../defaults/queryForm'
import {extraDetailsAboutUs, teachers, constBaseUrl} from "../../constant/constant"

const backgroundImage = constBaseUrl+'/images/slider/6.jpg'

export default class Contact extends Component {
  render() {
    let contacts = contactus
    return (
      <div style={{marginBottom: "2%"}}>
        <div className="blocks3">
          <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url("+backgroundImage+")",
          }}
        ></div>
        </div>
        <div className="contacts">
          <div className="heading">Contact Details</div>
          <div style={{paddingTop:"2rem",justifyContent:"space-around", display:"block", flexWrap:""}}>
            {contactus.ContactDetails.map((contact, index)=>(
              <div style={{display:"flex", marginLeft:"auto", marginRight:"auto", width:"90%"}}>
                <div style={{width:"30%"}}>
                  <div style={{height:"4rem", backgroundImage: contact.icon, backgroundSize:"100% 100%", backgroundColor:"#5c5889"}}></div>
                </div>
                <div style={{width:"80%"}}>
                  <p style={{margin:"0", fontWeight:"700"}}>{contact.heading}</p>
                  <a href={contact.ref} target="_blank" className="link"><p>{contact.value}</p></a>
                </div>
              </div> 
            ))}
            <div className="social-media" style={{width:"90%", marginLeft:"auto", marginRight:"auto", justifyContent:"space-around", display:"block"}}>
                  <p style={{margin:"0", fontWeight:"700", textAlign:"center", fontSize:"1.2rem"}}>Follow Us on</p>
                  <div style={{display:"flex", justifyContent:"space-around", marginLeft:"10%"}}>{social_images.map((social, index) =>(
                    <div>
                      <a href={social.url} target="_blank" className="link"><img src={social.img} style={{height:"100%"}}/></a>
                    </div>
                  ))}</div>
                </div>
          </div>
        </div>
        {/* <div className="contacts" style={{margin:"2.5%", marginLeft:"0%",backgroundColor:"white"}}> */}
          <div style={{paddingRight:"5%", height:"100vh"}}>
            <div style={{paddingLeft:"2%"}}><MapComponent /></div>
          </div>
            <div style={{width:"100%", zIndex:"9999", margin:"auto", backgroundImage:"url('./home/bg/2.png')", backgroundPosition:"top right", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
              <QueryForm />
            </div>
        {/* </div> */}
      </div>
    );
  }
}


