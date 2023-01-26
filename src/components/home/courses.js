import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const courses = [
  { img: "/slide.png", name: "100 Hours TTC", },
  { img: "/slide.png", name: "200 Hours TTC"},
  { img: "/slide.png", name: "300 Hours TTC"},
  { img: "/slide.png", name: "Online TTC"},
];

export default class Courses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showDetails = this.showDetails.bind(this);
    }
    showDetails () {
      let {show} = this.state
      this.setState({
        show: !show
      })
    }
    render() {
        let {show} = this.state
        return (
          <div>

          <div className='courses'>
            {courses.map((course, index) =>(
              <div className="course" onClick={this.showDetails}>
              <img src={course.img} />
              <text>{course.name}</text>
              <text> {course.subtext}</text>
            </div>
            ))}
          </div>
            { show && <div style={{width: "90%",marginLeft:"5%", height:"25rem",background:"linear-gradient(to right, #ffffff 0%, #5C5889 100%)", borderRadius:"4rem", marginBottom:"2rem"}}>
                <text>Description</text>
              </div>}
            </div>
        );
    }
}
