import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoaded: false
    };
    // this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    let {categories} = this.props
    this.setState({
      categories: categories,
      isLoaded: true
    })
  }

  componentWillReceiveProps(newProps){
    let {categories} = newProps
    this.setState({
      categories: categories,
      isLoaded: true
    })
  }

    render() {
        let {categories, isLoaded} = this.state
        return (
          <div style={{width:"100%"}}>
            <div><h5 style={{ fontFamily:"Poppins", fontSize:"x-large", fontFamily:"'Roboto Slab', serif", fontWeight:"300"}}>Categories</h5></div>
            {isLoaded && <div style={{marginTop:"2rem"}}>
              {categories.map((category, index) => (
                <div className="pointer" style={{display:"flex", paddingBottom:"15px"}} onClick={()=>this.props.onSelectCategory(category)}>
                  <div style={{width:"10%"}}><div className="arrow-right"></div></div>
                  <div style={{width:"60%"}}><text style={{color: "black", fontSize:"22px", fontFamily:"Roboto Slab", fontWeight:"lighter"}}>{category}</text></div>
                  </div>
              ))}
              </div>}
          </div>
        );
    }
}
