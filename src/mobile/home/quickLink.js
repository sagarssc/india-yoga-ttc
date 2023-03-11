import React, { Component } from "react";
import { Link } from "react-router-dom";
import {QuickLinks} from '../../constant/constant'
export default class QuickLink extends Component {
  render() {
      let quickLinks = QuickLinks
        return (
          <div  className='links' style={{height:"auto", margin:"5%", display:'block'}}>
            <div style={{width:"100%",height:"20%", display:"flex", justifyContent:"space-between", paddingLeft:"1rem", paddingRight:"1rem"}}>
                <text style={{fontSize:"25px", fontFamily:"'Poppins', sans-serif"}}>{quickLinks.heading}</text>
                <div style={{width:"25%",height:"5rem", backgroundImage:quickLinks.headImgUrl, backgroundSize:"100% 100%"}}></div>
            </div>
            <div style={{margin:"5%"}}>
              <Link to={quickLinks.imageLinks[0].link} className="link" style={{paddingBottom:"2%"}}>
                <div className="gery-image" style={{height:"20rem", backgroundImage:quickLinks.imageLinks[0].img, backgroundSize:"100% 100%"}}>
                  <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                  <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[0].title}</text>
                  </div>
                </div>
              </Link>
            </div>
            <div style={{margin:"5%"}}>
              <Link to={quickLinks.imageLinks[1].link} className="link"><div className="gery-image" style={{height:"20rem", backgroundImage:quickLinks.imageLinks[1].img, backgroundSize:"100% 100%"}}>
                    <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                      <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[1].title}</text>
                    </div>
                  </div>
              </Link>
            </div>
            <div style={{margin:"5%"}}>
              <Link to={quickLinks.imageLinks[2].link} className="link"><div className="gery-image" style={{height:"20rem", backgroundImage:quickLinks.imageLinks[2].img, backgroundSize:"100% 100%"}}>
                    <div style={{position:"absolute", textAlign:"center", bottom:"10%", width:"40%"}}>
                      <text style={{fontSize:"25px", fontWeight:"700", color:"white"}}>{quickLinks.imageLinks[2].title}</text>
                    </div>
              </div>
              </Link>
            </div>
            <div style={{margin:"5%"}}>
              <div style={{backgroundColor:"#ffc13e", justifyContent:"center", textAlign:"center", paddingTop:"2%", paddingBottom:"2%"}}>
                <p style={{fontWeight:"700", fontSize:"25px"}}> Contact US</p>
                <p style={{fontWeight:"700", fontSize:"25px"}}> {quickLinks.contact}</p>
              </div>
            </div>
          </div>
        );
    }
}
