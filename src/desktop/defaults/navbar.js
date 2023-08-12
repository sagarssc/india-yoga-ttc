import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../index.css";
import "../../css/navbar1.css"


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
  {title:"300 Hrs Course", link:"/300-hrs-course"},
  {title:"500 Hrs Course", link:"/500-hrs-course"},
  // {title:"Online Training", link:"/online-training"},
]
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
        const isMobile = window.innerWidth <= 768;
        return (
          <div>
            {!isMobile ? //<div className="navbar" style={{backgroundImage:"url('./header.png')"}}>
            <div className="navbar" >
              <div className="nav-container" style={{display:"block"}}>
                <Link to="/" className="link">
                <div style={{display:"flex", justifyContent:"center"}}><div style={{backgroundColor:"#ffffff00" ,backgroundImage:"url('./icons/logo.png')", backgroundRepeat:"no-repeat", width:"12%", height:"5rem", backgroundSize:"100% 100%", paddingBottom:"2%"}}></div>
                  <div className="logo-large">
                  INDIA YOGA TTC
                </div></div>
                </Link>
                <hr style={{border:"1px dashed #000000", margin:"10px 0", padding:"0"}}/>
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
            </div> :
            // <div className="navbar" style={{backgroundImage:"url('./header.png')"}}>
            <div className="navbar">
            <div className="nav-container2" style={{width:"100%", display:"flex"}}>
              <Link to="/" className="link" style={{width:"100%", display:"flex", alignItems:"center"}}>
              <div style={{display:"flex", width:"90%", alignItems:"center", justifyContent:"space-around"}}><div style={{backgroundColor:"#ffffff00" ,backgroundImage:"url('./icons/logo.png')", backgroundRepeat:"no-repeat", width:"10%", height:"2rem", backgroundSize:"100% 100%", paddingBottom:"2%"}}></div>
                <div className="logo-large" style={{fontSize:"20px"}}>
                INDIA YOGA TTC
              </div></div>
              </Link>
              <div className="dropdown2">
                  <div className="dropbtn2 link" onClick={()=>this.handleShowNavbar()}><p><img src="./icons/nav.png" style={{paddingTop:"20%", height:"2rem"}}/></p></div>
                  {showNavbar && <div className="dropdown-content2">
                    <div className="dropdown3">
                      <div className="dropbtn3 link"><p className="menu-text2">Courses</p></div>
                      <div className="dropdown-content3" onClick={()=>this.handleShowNavbar()}>
                        {courses.map((course, index) => (
                          <Link to={course.link} className="link"><p className="menu-text-drop">{course.title}</p></Link>
                        ))}
                      </div>
                    </div>
                  {titles.map((title, index) => (  
                  <Link to={title.link} className="link" onClick={()=>this.handleShowNavbar()}><p className="menu-text2">{title.title}</p></Link>
                  ))}
                  </div>}
                </div>
            </div>
          </div>}
          </div>
        );
    }
}
