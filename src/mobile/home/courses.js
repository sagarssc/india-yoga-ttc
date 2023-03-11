import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { courses } from "../../constant/constant";
import CourseDetails from "../defaults/courseDetails"
export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      selected:  '100',
      show: true,
      details: courses['100'].details
    };
    this.showDetails = this.showDetails.bind(this);
  }
  showDetails(index) {
    let { selected, show } = this.state;
    let title = courses[index].name;
    show = true
    let details =courses[index].details
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
          {Object.entries(courses).map((course, index) => (
            <div>{!!!course[1].hide && <div>
                <div className="course2" onClick={() => this.showDetails(course[0])} style={{backgroundImage: "url('./home/bg/header.png')"}}>
                  <text style={{margin: "4rem", marginTop:"0.5rem", marginBottom:"0.5rem"}}>{course[1].name}</text>
                </div>
                <CourseDetails index={course[0]} displayTitle={false} displayReadMore={true} onReadMore={()=>this.props.selectCourse(course[0])}/>
            </div>}</div>
          ))}
        </div>
      </div>
    );
  }
}
