import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";


const titles = [  
  // {title:"Courses", link:"/courses"},
  {title:"About Us",  link:"/aboutus"},
  {title:"Blog", link:"/blog"},
  {title:"Contact", link:"/contact"},
  {title:"Retreats", link:"/retreats"},
  {title:"Register", link:"/register"},
 ]

const courses = [
  {title:"100 Hrs Course", link:"/100-hrs-course"},
  {title:"200 Hrs Course",  link:"/200-hrs-course"},
  {title:"200 Hrs Course", link:"/300-hrs-course"},
  {title:"500 Hrs Course", link:"/500-hrs-course"},
  {title:"Online Training", link:"/online-training"},

]
export default class Navbar extends Component {
    render() {
        return (
          <div className="navbar" style={{backgroundImage:"url('./header.png')"}}>
            <div className="nav-container">
              <Link to="/" className="link" style={{width:"50%"}}>
              <div style={{display:"flex"}}><div style={{backgroundColor:"#ffffff00" ,backgroundImage:"url('./icons/logo.png')", backgroundRepeat:"no-repeat", width:"12%", height:"5rem", backgroundSize:"100% 100%", paddingBottom:"2%"}}></div>
                <div className="logo-large">
                INDIA YOGA TTC
              </div></div>
              </Link>
              <div className="nav-menu1">
                <div className="dropdown">
                  <div className="dropbtn link"><p className="menu-text">Courses</p></div>
                  <div className="dropdown-content">
                    {courses.map((course, index) => (
                      <Link to={course.link} className="link"><p className="menu-text-drop">{course.title}</p></Link>
                    ))}
                  </div>
                </div>
                {titles.map((title, index) => (  
                <Link to={title.link} className="link"><p className="menu-text">{title.title}</p></Link>
                ))}
              </div>
            </div>
          </div>
        );
    }
}
