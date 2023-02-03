import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";


export default class Blog extends Component {
    render() {
        return (
          <div style={{width:"100%", padding:"5%", display:"flex"}}>
            <div className="post-sections"style={{width:"75%", display:"block"}}>
              <img src="./slide.png" style={{width:"90%"}}/>
              <div style={{paddingTop:"2%", color:"gold", fontSize:"18px", fontWeight:"500", fontFamily:"Poppins"}}><text>31 Jan 2023</text></div>
              <div className="blog-heading"><text>yoga dwkn dmwk dmwk dwmk dwmek id dcswjki dwji dfwjid weidnwe nidfew jidwe ijdwe jijdwe jidwe jidjwe jijdwe jifdew jidwefn</text></div>
              <div style={{paddingTop:"2%", color:"black", fontSize:"15px", fontWeight:"300"}}><text>cmkdsn mckdnws lmdkcwnj kjnjdcwe lkmdncew okindewf mmojindew koidw jmdiew dckowei dwejin jidwe jidnwem ojdnw ojindwekojin oinbfw oijnhdw jnjfwde mjnijwdf miknjwefdyoga dwkn dmwk dmwk dwmk dwmek id dcswjki dwji dfwjid weidnwe nidfew jidwe ijdwe jijdwe jidwe jidjwe jijdwe jifdew jidwefn</text></div>
              <div onClick={{}} style={{width:"20%", backgroundColor:"#5c5889", height:"3rem", borderRadius:"2rem", display:"inline-flex", marginTop:"1rem", boxShadow:"-2px 3px 5px 5px", justifyContent:"center", paddingTop:"1.8%"}}>
                    <text style={{fontWeight:"700", color:"wheat"}}>Read More</text>
                  </div>
            </div>
            <div className="category" style={{width:"25%",backgroundColor:"green"}}></div>
          </div>
        );
    }
}
