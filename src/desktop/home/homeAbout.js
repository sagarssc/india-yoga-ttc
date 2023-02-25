import React, { Component } from "react";
import { About } from "../../constant/home";

export default class HomeAbout extends Component {
  render() {
    return (
      <div style={{padding:"3%",fontSize:"1.5rem", backgroundImage:"url('/home/bg/header.png')"}}>
        {About}
      </div>

    );
  }
}
