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
      isLoaded:false
    };
  }

  componentDidMount(){
    let {selectedBlog} = this.props
    this.setState({
      blog: selectedBlog,
      isLoaded: true
    })
  }

  componentWillUnmount(){
    this.setState({
      isLoaded:false
    })
  }

    render() {
      let {blog, isLoaded} = this.state
        return (
          <div style={{width:"100%"}}>
            {isLoaded && <div style={{padding:"2%"}}>
                <img className="blog-image" src={blog.image} style={{width:"90%"}}/>
              <div style={{paddingTop:"2%", color:"gold", fontSize:"18px", fontWeight:"500", fontFamily:"Poppins"}}><text>{blog.date}</text></div>
              <div className="blog-heading"><text>{blog.header}</text></div>
              <div style={{paddingTop:"2%", color:"black", fontSize:"15px", fontWeight:"300", width:"90%"}}><text>{blog.content}</text></div>
            </div>}
          </div>
        );
    }
}
