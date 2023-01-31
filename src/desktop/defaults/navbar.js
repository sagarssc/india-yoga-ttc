import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";


const titles = ["Courses", "About Us", "Blog", "Contact" ]
export default class Navbar extends Component {
    render() {
        return (
          <div className="navbar" style={{backgroundImage:"url('./header.png')", position:"fixed"}}>
            <div className="nav-container">
              <div onClick={()=>this.props.switchTab("home")} className="logo">
                INDIA YOGA TTC
              </div>
              <div className="nav-menu1">
                {titles.map((title, index) => (  
                <p className="menu-text">{title}</p>
                ))}
              </div>
            </div>
          </div>
        );
    }
}
