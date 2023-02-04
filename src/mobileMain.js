import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./mobile/defaults/navbar";
import Home from "./mobile/home/home";
import Footer from "./mobile/defaults/footer";
import Hrs from "./mobile/courses/hrs";
import { BrowserRouter } from 'react-router-dom'

export default class MobileMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "home",
      courseHrs: null,
    };
    this.updateCourseHrs = this.updateCourseHrs.bind(this);
    this.updateTab = this.updateTab.bind(this);
  }

  updateCourseHrs(hrs) {
    this.setState({
      courseHrs: hrs,
      tab: "course",
    });
  }

  updateTab(tab) {
    this.setState({
      tab: tab,
    });
  }

  getContent() {
    let { tab, courseHrs } = this.state;
    window.scrollTo(0, 0);
    switch (tab) {
      case "home":
        return <Home selectCourse={(hrs) => this.updateCourseHrs(hrs)} />;
        break;
      case "course":
        return <Hrs hrs={courseHrs} />;
    }
  }
  render() {
    return (
      <div>
        <div>
          <div className="app">
            {/* <BrowserRouter> */}
            <Navbar switchTab={(tab)=>this.updateTab(tab)}/>
            {/* </BrowserRouter> */}
            <div className="background">
              {this.getContent()}
              {/* <Hrs100/> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
