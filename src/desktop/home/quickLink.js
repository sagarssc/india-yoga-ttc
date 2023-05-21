import React, { Component } from "react";
import { Link } from "react-router-dom";
import {QuickLinks} from '../../constant/constant'
import "../../css/Home.css"

export default class QuickLink extends Component {
  render() {
      let quickLinks = QuickLinks
      const isMobile = window.innerWidth <= 768;
        return (
          <div style={{width:"100%"}}>
          {!isMobile ? <div  className='links'>
            <div style={{width:"66%",height:"100%", display:"block"}}>
              <div style={{width:"100%",height:"20%", display:"flex", justifyContent:"space-between", paddingLeft:"1rem", paddingRight:"1rem"}}>
                <text style={{fontSize:"37px", fontFamily:"'Poppins', sans-serif"}}>{quickLinks.heading}</text>
                <div style={{width:"20%",height:"100%", backgroundImage:quickLinks.headImgUrl, backgroundSize:"100% 100%"}}></div>
              </div>
              <div style={{width:"100%",height:"80%", display:'flex'}}>
                <div style={{width:"50%",margin:"2% 2% 0% 2%",display:"block"}}>
                <Link to={quickLinks.imageLinks[0].link} className="link">
                  <div className="gery-image" style={{height:"60%", backgroundImage:quickLinks.imageLinks[0].img, backgroundSize:"100% 100%"}}>
                    <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                    <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[0].title}</text>
                    </div>
                  </div>
                </Link>
                  <div style={{height:"10%"}}></div>
                  <div style={{height:"30%", backgroundColor:"#f2e0d0"}}></div>
                </div>
                <div style={{width:"50%",margin:"2% 2% 0% 2%",display:"block", paddingTop:"10%"}}>
                <Link to={quickLinks.imageLinks[1].link} className="link"><div className="gery-image" style={{height:"70%", backgroundImage:quickLinks.imageLinks[1].img, backgroundSize:"100% 100%"}}>
                    <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                      <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[1].title}</text>
                    </div>
                  </div></Link>
                  <div style={{height:"10%"}}></div>
                  <div style={{height:"20%", backgroundColor:"#cad8e6"}}></div>
                </div>
              </div>
            </div>
            <div style={{width:"34%",margin:"0% 2% 0% 2%",paddingTop:"4rem"}}>
            <Link to={quickLinks.imageLinks[2].link} className="link"><div className="gery-image" style={{height:"65%", backgroundImage:quickLinks.imageLinks[2].img, backgroundSize:"100% 100%"}}>
                    <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                      <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[2].title}</text>
                    </div>
              </div></Link>
              <div style={{height:"10%"}}></div>
              <div style={{height:"25%", backgroundColor:"#ffc13e", justifyContent:"center", textAlign:"center", paddingTop:"8%"}}>
                <p style={{fontWeight:"700", fontSize:"25px"}}> Contact US</p>
                <p style={{fontWeight:"700", fontSize:"25px"}}> {quickLinks.contact}</p>
              </div>
            </div>
          </div> : <div  style={{display:"block", margin: "5%"}}>
              <div style={{width:"100%",height:"8rem", display:"flex", justifyContent:"space-between", paddingLeft:"1rem", paddingRight:"1rem"}}>
                <text style={{fontSize:"27px", fontFamily:"'Poppins', sans-serif"}}>{quickLinks.heading}</text>
                <div style={{width:"40%",height:"100%", backgroundImage:quickLinks.headImgUrl, backgroundSize:"100% 100%"}}></div>
              </div>
                <div style={{height:"16rem",margin:"2% 2% 0% 2%",display:"block"}}>
                  <Link to={quickLinks.imageLinks[0].link} className="link">
                    <div className="gery-image" style={{height:"100%", backgroundImage:quickLinks.imageLinks[0].img, backgroundSize:"100% 100%"}}>
                      <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                      <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[0].title}</text>
                      </div>
                    </div>
                  </Link>
                </div>
                <div style={{height:"16rem",margin:"2% 2% 0% 2%",display:"block", paddingTop:"10%"}}>
                  <Link to={quickLinks.imageLinks[1].link} className="link"><div className="gery-image" style={{height:"100%", backgroundImage:quickLinks.imageLinks[1].img, backgroundSize:"100% 100%"}}>
                      <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                        <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[1].title}</text>
                      </div>
                    </div>
                  </Link>
                </div>
                <div style={{height:"16rem",margin:"2% 2% 0% 2%",display:"block", paddingTop:"10%"}}>
                    <Link to={quickLinks.imageLinks[2].link} className="link"><div className="gery-image" style={{height:"100%", backgroundImage:quickLinks.imageLinks[2].img, backgroundSize:"100% 100%"}}>
                          <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                            <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[2].title}</text>
                          </div>
                      </div>
                    </Link>
                </div>
          </div>
          }
          </div>
        );
    }
}
