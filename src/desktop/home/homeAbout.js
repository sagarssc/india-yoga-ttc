import React, { Component } from "react";
import { About } from "../../constant/home";
import "../../css/homeAbout.css"
export default class HomeAbout extends Component {
  render() {
    return (
      <div className="home-about-container">
        <div className="home-about-content">
          <div className="home-about-header">
            <h2>{About.header}</h2>
          </div>
          {About.contents.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </div>
    );
  }
}
