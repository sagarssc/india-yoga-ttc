import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";
import Categories from "./categories";
import Recents from "./recents";

export default class DetailedBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    const { selectedBlog } = this.props;
    this.setState({
      blog: selectedBlog,
      isLoaded: true
    });
  }

  componentWillUnmount() {
    this.setState({
      isLoaded: false
    });
  }

  render() {
    const { blog, isLoaded } = this.state;

    return (
      <div style={{ width: "100%", fontFamily: "Arial, sans-serif" }}>
        {isLoaded && (
          <div style={{ padding: "2%" }}>
            <img className="blog-image" src={blog.image_path} style={{ width: "90%" }} />
            <div style={{ paddingTop: "2%", color: "#5c5889", fontSize: "18px", fontWeight: "500", fontFamily: "Poppins" }}>
              {blog.date}
            </div>
            <h1 className="blog-heading" style={{ fontFamily: "Georgia, serif" }}>{blog.title}</h1>
            <div style={{ paddingTop: "2%", color: "black", fontSize: "15px", fontWeight: "300", width: "90%", fontFamily: "Arial, sans-serif" }}>
              {blog.content.content}
            </div>
            {blog.content.subcontent && (
              <div>
                {blog.content.subcontent.map((paragraph, index) => (
                  <div key={index} style={{paddingTop: "2rem", paddingBottom:"0rem"}}>
                    <h2 className="sub-heading" style={{ fontSize: "25px", fontWeight: "500", width: "90%", fontFamily: "Georgia, serif" }}>{paragraph.title}</h2>
                    <div style={{ paddingTop: ".5%", color: "black", fontSize: "15px", fontWeight: "300", width: "90%", fontFamily: "Arial, sans-serif" }}>
                      {paragraph.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
