import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from "./desktop/defaults/navbar";
import Home from "./desktop/home/home";
import Footer from "./desktop/defaults/footer";
import Hrs from "./desktop/courses/hrs";
import Blog from "./desktop/home/blog";
import ScrollToTop from "./scrollToTop";
import About from "./desktop/about/about"
import Contact from "./desktop/contactus/contact";
export default class DesktopMain extends Component {
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
