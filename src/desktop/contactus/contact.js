import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "../defaults/slider";
import ExtraDiv from "../defaults/extraDiv";
import Gallery from "../defaults/gallery";
import {extraDetailsAboutUs, teachers} from "../../constant"
import {contactus, icons, social_images} from "../../constant"
// import {Mailto} from "../../utils"
export default class Contact extends Component {
  render() {
    let contacts = contactus
    return (
      <div>
        <div className="blocks">
          <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url('/home/slide/1.png')",
          }}
        ></div>
        </div>
        <div className="contacts">
          <div className="heading">Contact Details</div>
          <div style={{paddingTop:"2rem",justifyContent:"space-around", display:"flex"}}>
            {contactus.ContactDetails.map((contact, index)=>(
              <div style={{display:"flex", marginLeft:"auto", marginRight:"auto", width:"30%"}}>
                <div style={{width:"30%"}}>
                  <div style={{height:"4rem", backgroundImage: contact.icon, backgroundSize:"100% 100%", backgroundColor:"gold"}}></div>
                </div>
                <div style={{width:"80%"}}>
                  <p style={{margin:"0", fontWeight:"700"}}>{contact.heading}</p>
                  <a href={contact.ref} target="_blank" className="link"><p>{contact.value}</p></a>
                </div>
              </div> 
            ))}
            <div className="social-media" style={{width:"20%", marginLeft:"auto", marginRight:"auto", justifyContent:"space-around", display:"block"}}>
                  <p style={{margin:"0", fontWeight:"700", textAlign:"center", fontSize:"1.2rem"}}>Follow Us on</p>
                  <div style={{display:"flex", justifyContent:"space-around", marginLeft:"10%"}}>{social_images.map((social, index) =>(
                    <div>
                      <a href={social.url} target="_blank" className="link"><img src={social.img} style={{height:"50%"}}/></a>
                    </div>
                  ))}</div>
                </div>
          </div>
        </div>
        {/* <div className="common-div">
          <ExtraDiv extraDetails={extraDetailsAboutUs}/>
        </div> */}
        {/* <div className="our-teachers" style={{backgroundImage:"url('/home/bg/header.png')"}}>
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
        </div> */}
      </div>
    );
  }
}


