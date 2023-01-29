import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const titles = ["Courses", "About Us", "Blog", "Contact" ]
export default class Navbar extends Component {
    render() {
        return (
          <div className="navbar" style={{position: "fixed"}}>
            <div className="nav-container">
              <div onClick={()=>this.props.switchTab("home")} className="logo">
                INDIA YOGA TTC
              </div>
              <div className="nav-menu">
                {titles.map((title, index) => (  
                <p className="menu-text">{title}</p>
                ))}
              </div>
            </div>
          </div>
        );
    }
}
