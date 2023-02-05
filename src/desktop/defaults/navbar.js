import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";


const titles = [
  {title:"Courses", link:"/courses"},
  {title:"About Us",  link:"/aboutus"},
  {title:"Blog", link:"/blog"},
  {title:"Contact", link:"/contact"} ]
export default class Navbar extends Component {
    render() {
        return (
          <div className="navbar" style={{backgroundImage:"url('./header.png')"}}>
            <div className="nav-container">
              <Link to="/" className="link"><div className="logo-large">
                INDIA YOGA TTC
              </div></Link>
              <div className="nav-menu1">
                {titles.map((title, index) => (  
                <Link to={title.link} className="link"><p className="menu-text">{title.title}</p></Link>
                ))}
              </div>
            </div>
          </div>
        );
    }
}
