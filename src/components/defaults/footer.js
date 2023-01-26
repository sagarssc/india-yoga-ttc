import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const titles = ["Courses", "About Us", "Blog", "Contact" ]
export default class Footer extends Component {
    render() {
        return (
          <nav className="footer">
            <div className="nav-container">
              <div className="logo">
                ALFA
              </div>
              <div className="nav-menu">
                {titles.map((title, index) => (  
                <p className="menu-text">{title}</p>
                ))}
              </div>
            </div>
          </nav>
        );
    }
}
