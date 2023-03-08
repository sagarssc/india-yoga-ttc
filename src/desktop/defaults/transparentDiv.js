import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";

export default class TransparentDiv extends Component {
    render() {
        return (
          <div style={{width:"40%", height:"100%", backgroundColor:"#e4dadab8", marginLeft:"10%", borderTopLeftRadius:"10rem", borderBottomRightRadius:"10rem", padding:"8%" }}>
            <text style={{margin:"auto", fontSize:"22px"}}>
              ”Yoga is the ultimate practice. It simultaneously stimulates our inner light and quiets our overactive minds. It is both energy and rest. Yin and Yang. We feel the burn and find our bliss.”
            </text>
            <h5 style={{margin:"auto", fontSize:"22px", fontWeight:"600"}}>
              — Elise Joan
            </h5>
          </div>
        );
    }
}
