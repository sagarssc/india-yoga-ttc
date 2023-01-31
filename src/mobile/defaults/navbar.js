import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../style.css";

const titles = ["Courses", "About Us", "Blog", "Contact"];
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false,
    };
    this.handleShowNavbar = this.handleShowNavbar.bind(this);
  }

  handleShowNavbar = () => {
    let { showNavbar } = this.state;
    this.setState({
      showNavbar: !showNavbar,
    });
  };

  render() {
    let { showNavbar } = this.state;
    return (
      <div
        className="navbar"
        style={{
          backgroundImage: "url('./header.png')",
          position: "fixed",
          paddingTop: "0",
        }}
      >
        <div className="nav-container" style={{justifyContent:"space-between"}}>
          <div onClick={() => this.props.switchTab("home")} className="logo">
            INDIA YOGA TTC
          </div>
          {!showNavbar ? (
            <div className="menu-icon" onClick={() => this.handleShowNavbar()}>
              <img src="./icons/nav.png" style={{paddingTop:"20%"}}/>
            </div>
          ) : (
            <div
              style={{
                width: "50%",
                backgroundColor: "#f1f1f1d1",
                height: "100vh",
                position: "absolute",
                right: 0,
                paddingTop:"25%",
                transition: "all .75s ease"
              }}
            >
              <div className="nav-menu">
                {titles.map((title, index) => (  
                <p className="menu-text">{title}</p>
                ))}
              </div>
            </div>
          )}
          {/* <div className="nav-elements">
            <ul style={{listStyleType: "None"}}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div> */}
          {/* <div className="nav-menu">
                {titles.map((title, index) => (  
                <p className="menu-text">{title}</p>
                ))}
              </div> */}
        </div>
      </div>
    );
  }
}
