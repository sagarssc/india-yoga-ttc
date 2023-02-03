import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { courses } from "../../constant";
import CourseDetails from "../defaults/courseDetails"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      selected:  -1,
      show: false,
      details: {}
    };
    this.showDetails = this.showDetails.bind(this);
  }
  showDetails(index) {
    let { selected, show } = this.state;
    let title = courses[index].name;
    show = true
    let details =courses[index].details
    if (index == selected) {
      index = -1;
      show = false
      details = {}
    }
    this.setState({
      selected: index,
      show: show,
      title: title,
      details: details
    });
  }
  render() {
    let { selected, title, details, show } = this.state;
    let cr = courses
    return (
      <div>
        <div className="courses" style={{display:"block"}}>
          {/* {Object.entries(courses).map((course, index) => (
            <div>
              {selected == course[0] ? (
                <div
                  className="selected"
                  onClick={() => this.showDetails(course[0])}
                >
                  <img src={course[1].img} />
                  <text>{course[1].name}</text>
                  <text> {course[1].subtext}</text>
                </div>
              ) : (
                <div className="course" onClick={() => this.showDetails(course[0])}>
                  <img src={course[1].img} />
                  <text>{course[1].name}</text>
                  <text> {course[1].subtext}</text>
                </div>
              )}
            </div>
          ))} */}
          <Carousel slide={1} width="100%" style={{backgroundColor:'#fff'}} showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop={true} emulateTouch={true}>
          {Object.entries(courses).map((course, index) => (
            <div className="course" onClick={() => this.showDetails(course[0])}>
            <img src={course[1].img} />
            <text>{course[1].name}</text>
            <text> {course[1].subtext}</text>
          </div>
          ))}
        </Carousel>
        </div>
        {show && (
          <CourseDetails index={selected} displayTitle={true} onReadMore={()=>this.props.selectCourse(selected)}/>
        )}
      </div>
    );
  }
}