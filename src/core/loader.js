import React, { Component } from "react";
import "./Loader.css"; // import the CSS file for styles

export default class Loader extends Component{
  render() {
  return (
    <div className="loader-container">
      <div className="loader-circle"></div>
      <img src="./loader.gif" className="loader-image" alt="yoga-gif" />
    </div>
  );
  }
};

