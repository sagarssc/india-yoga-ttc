import React, { Component } from "react";
import { About } from "../../constant/home";

export default class HomeAbout extends Component {
  render() {
    return (
      <div style={{ padding: "3%", fontSize: "1.5rem", backgroundImage: "url('/home/bg/header.png')" }}>
        <div style={{ backgroundColor: "white" }}>
          <div style={{ marginBottom: "1rem" }}>
            <text style={{ fontFamily: "'Roboto Slab'", fontSize: "25px", fontWeight: "700" }}>{About.header}</text>
          </div>
          {About.contents.map((content, index) => (
            <p style={{ fontSize: "18px", textAlign: "justify" }}>{content}</p>
          ))}
        </div>
      </div>
    );
  }
}
