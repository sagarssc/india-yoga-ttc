import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";

export default class Recents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      isLoaded: false
    };
    // this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    let {blogs} = this.props
    let isLoaded = false
    if(blogs){
      blogs = blogs.slice(0,3) 
      if(blogs.length > 0){
        isLoaded = true
      }
    }
    this.setState({
      blogs: blogs,
      isLoaded: isLoaded
    })
  }

  componentWillReceiveProps(newProps){
    let {blogs} = newProps
    let isLoaded = false
    if(blogs){
      blogs = blogs.slice(0,3) 
      if(blogs.length > 0){
        isLoaded = true
      }
    }
    this.setState({
      blogs: blogs,
      isLoaded: isLoaded
    })
  }

    render() {
        let {blogs, isLoaded} = this.state
        return (
          <div style={{width:"100%", paddingTop:"4rem"}}>
            <div><h5 style={{ fontFamily:"Poppins", fontSize:"x-large", fontFamily:"'Roboto Slab', serif", fontWeight:"300"}}>Recent Posts</h5></div>
            {isLoaded && <div style={{marginTop:"2rem"}}>
              {blogs.map((blog, index) => (
                  <div onClick={()=>this.props.onSelectBlog(blog._id)} className="pointer" style={{display:"flex", marginTop:"1rem", paddingBottom:"1rem",borderBottom:"1px #ededed solid"}}>
                    <div style={{width:"30%"}}>
                      <img src={blog.image_path} style={{width:"100%", height:"auto"}}/>
                    </div>
                    <div style={{width:"70%", display:"block", paddingLeft:".5rem"}}>
                      <div style={{paddingTop:"2%", color:"#ecb537", fontSize:"15px", fontWeight:"500", fontFamily:"'Poppins'"}}><text>{blog.date}</text></div>
                      <h6 style={{color: "black", fontSize:"18px", fontFamily:"'Poppins'", fontWeight:"600"}}>{blog.title.slice(0,30) + '....'}</h6>
                    </div>
                  </div>
              ))}
              </div>}
          </div>
        );
    }
}
