import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/defaults/navbar";
import Home from  "./components/home/home";
import Footer from './components/defaults/footer';
import Hrs from './components/courses/hrs';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "home",
      courseHrs: null
    };
    this.updateCourseHrs = this.updateCourseHrs.bind(this);
    this.updateTab = this.updateTab.bind(this);

  }

  updateCourseHrs (hrs) {
    this.setState({
      courseHrs: hrs,
      tab: "course"
    })
  }

  updateTab (tab) {
    this.setState({
      tab: tab
    })
  }

  getContent () {
    let {tab, courseHrs} = this.state
    window.scrollTo(0, 0)
    switch(tab){
      case "home": return (<Home selectCourse={(hrs)=>this.updateCourseHrs(hrs)}/>); 
              break;
      case "course": return (<Hrs hrs={courseHrs}/>)
    }
  }
  render() {
    return (
      <Router>
        <div className="app">
        <Navbar switchTab={(tab)=>this.updateTab(tab)}/>
        <div className='background'>
        {this.getContent()}
        {/* <Hrs100/> */}
        <Footer />
        </div>
        </div>
      </Router>
    );
  }
}


