import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";
import Categories from "./categories";
import Recents from "./recents";

export default class RightSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoaded: false
    };
  }

    render() {
        let {categories, isLoaded} = this.state
        // let indexes = []
        // Array(no_of_pages).fill().map((item, i) => indexes.push(i+1))
        return (
          <div style={{width:"100%"}}>
            <Categories categories={this.props.categories} onSelectCategory={(category)=>this.props.onSelectCategory(category)}/>
            <Recents blogs={this.props.blogs} onSelectBlog={(id)=>this.props.onSelectBlog(id)}/>
          </div>
        );
    }
}
