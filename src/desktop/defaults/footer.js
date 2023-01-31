import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const titles = ["Courses", "About Us", "Blog", "Contact" ]

const social_images = [
  { img: "/facebook.png"},
  { img: "/instagram.png"},
  { img: "/youtube.png"},
];

export default class Footer extends Component {
    render() {
        return (
          <nav className="footer">
            <hr style={{borderTop:"20px solid #5C5889", boxShadow:"0 1rem 4px 0 rgb(0 0 0 / 64%)"}}/>
            <div className="nav-container">
              <div className="social-media" style={{paddingTop:"1rem", width:"20%",justifyContent:"space-around", display:"flex"}}>
              {social_images.map((social, index) =>(
                <div>
              <img src={social.img} style={{width:"30px"}}/>
                </div>
            ))}
              </div>
              <text style={{color:"#000", position:"absolute", bottom:".2rem", left:"4rem"}}>Copyright © 2023, India Yoga TTC</text>

            </div>
          </nav>
        );
    }
}
