import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from "./mobile/defaults/navbar";
import Home from "./mobile/home/home";
import Footer from "./mobile/defaults/footer";
import Hrs from "./mobile/courses/hrs";
import Blog from "./mobile/home/blog";
import ScrollToTop from "./scrollToTop";
import About from "./mobile/about/about"
import Contact from "./mobile/contactus/contact";
import Retreat from "./mobile/retreats/main";
import RetreatType from "./mobile/retreats/varient";
import RegistrationForm from "./mobile/registeration/registeration";

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
      tab = tab.toLowerCase().replace(" ","_")
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
        case "course":
          return <Hrs hrs={courseHrs} />;
        case "blog":
          return <Blog />;
      }
    }
    render() {
      return (
        <div>
          <div>
              <BrowserRouter>
              <ScrollToTop />
            <div className="app">
              <div className="background">
              <Navbar props={this.props}/>
                <Routes>
                  <Route index element={<Home selectCourse={(hrs) => this.updateCourseHrs(hrs)} />} />
                  <Route path="/" element={<Home selectCourse={(hrs) => this.updateCourseHrs(hrs)} />} />
                  <Route path="/courses" element={<Hrs hrs={100} />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/aboutus" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/100-hrs-course" element={<Hrs hrs={100} />} />
                  <Route path="/200-hrs-course" element={<Hrs hrs={200} />} />
                  <Route path="/300-hrs-course" element={<Hrs hrs={300} />} />
                  <Route path="/500-hrs-course" element={<Hrs hrs={500} />} />
                  <Route path="/online-training" element={<Hrs hrs={"online"} />} />
                  <Route path="/retreats" element={<Retreat />} />
                  <Route path="/register" element={<RegistrationForm />} />
                  <Route path="/2-days-retreat" element={<RetreatType type={"2-day"} />} />
                  <Route path="/4-days-retreat" element={<RetreatType type={"4-day"} />} />
                  {/* </Route> */}
                </Routes>
              </div>
            </div>
                <Footer />
              </BrowserRouter>
                {/* {this.getContent()} */}
          </div>
        </div>
      );
    }
  }
  