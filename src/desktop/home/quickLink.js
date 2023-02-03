import React, { Component } from "react";

export default class QuickLink extends Component {
    render() {
        return (
          <div  className='links' style={{height:"100%", margin:"5%", display:'flex'}}>
            <div style={{width:"66%",height:"100%", display:"block"}}>
              <div style={{width:"100%",height:"20%", display:"flex", justifyContent:"space-between"}}>
                <text style={{fontSize:"37px", fontFamily:"serif"}}>Find your inner beauty through yoga and mediation</text>
                <div style={{width:"20%",height:"100%", backgroundImage:"url('./icons/logo.png')", backgroundSize:"100% 100%", backgroundColor:"gold"}}></div>
              </div>
              <div style={{width:"100%",height:"80%", display:'flex'}}>
                <div style={{width:"50%",margin:"2% 2% 0% 2%",display:"block"}}>
                  <div className="gery-image" style={{height:"60%", backgroundImage:"url('./slide.png')", backgroundSize:"100% 100%"}}></div>
                  <div style={{height:"10%"}}></div>
                  <div style={{height:"30%", backgroundColor:"#f2e0d0"}}></div>
                </div>
                <div style={{width:"50%",margin:"2% 2% 0% 2%",display:"block", paddingTop:"10%"}}>
                  <div className="gery-image" style={{height:"70%", backgroundImage:"url('./slide.png')", backgroundSize:"100% 100%"}}></div>
                  <div style={{height:"10%"}}></div>
                  <div style={{height:"20%", backgroundColor:"#cad8e6"}}></div>
                </div>
              </div>
            </div>
            <div style={{width:"34%",margin:"0% 2% 0% 2%"}}>
              <div className="gery-image" style={{height:"65%", backgroundImage:"url('./slide.png')", backgroundSize:"100% 100%"}}></div>
              <div style={{height:"10%"}}></div>
              <div style={{height:"25%", backgroundColor:"#ffc13e", justifyContent:"center", textAlign:"center", paddingTop:"8%"}}>
                <p style={{fontWeight:"700", fontSize:"25px"}}> Contact US</p>
                <p style={{fontWeight:"700", fontSize:"25px"}}> +91 9719700541</p>
              </div>
            </div>
          </div>
        );
    }
}
