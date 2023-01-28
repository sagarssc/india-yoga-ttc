import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const courses = [
  { img: "/slide.png", name: "100 Hours TTC" },
  { img: "/slide.png", name: "200 Hours TTC" },
  { img: "/slide.png", name: "300 Hours TTC" },
  { img: "/slide.png", name: "Online TTC" },
];
const details = [
  [ "Fee", "$499" ],
  [ "Style", "Ashtanga Yoga, Vinyasa Flow" ],
  [ "Level", "Beginner" ],
  [ "Duration", "12 Days" ],
  [ "Timing", "1st to 12th of every month" ],
];
export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      selected:  -1,
    };
    this.showDetails = this.showDetails.bind(this);
  }
  showDetails(index) {
    let { selected } = this.state;
    let title = courses[index].name;
    if (index == selected) {
      index = -1;
    }
    this.setState({
      selected: index,
      title: title,
    });
  }
  render() {
    let { selected, title } = this.state;
    return (
      <div>
        <div className="courses">
          {courses.map((course, index) => (
            <div>
              {selected == index ? (
                <div
                  className="selected"
                  onClick={() => this.showDetails(index)}
                >
                  <img src={course.img} />
                  <text>{course.name}</text>
                  <text> {course.subtext}</text>
                </div>
              ) : (
                <div className="course" onClick={() => this.showDetails(index)}>
                  <img src={course.img} />
                  <text>{course.name}</text>
                  <text> {course.subtext}</text>
                </div>
              )}
            </div>
          ))}
        </div>
        {selected != -1 && (
          <div
            style={{
              width: "90%",
              marginLeft: "5%",
              height: "32rem",
              background: "linear-gradient(to right, #ffffff 0%, #5C5889 100%)",
              borderRadius: "4rem",
              marginBottom: "2rem",
            }}
          >
            <text style={{ fontSize: "unset", fontFamily: "math" }}>
              {title}
            </text>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "80%",
                paddingRight: "4%",
                paddingTop: "1.2%"
              }}
            >
              <div
                style={{
                  width: "50%",
                  paddingTop: "3%",
                  paddingLeft: "6%",
                  paddingRight: "4%",
                }}
              >
                {details.map((detail, index) => (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <text style={{fontSize:"large"}}>{detail[0]}</text>
                      <text style={{fontSize:"large"}}>{detail[1]}</text>
                    </div>
                    <hr style={{ borderTop: "2px solid #5C5889" }} />
                  </div>
                ))}
                <div style={{ height:"5rem"}}>
                  <div style={{width:"50%", backgroundColor:"#5c5889", height:"4rem", borderRadius:"2rem", display:"inline-flex", marginTop:"1rem", boxShadow:"-2px 3px 5px 5px", justifyContent:"center", paddingTop:"3%"}}>
                    <text style={{fontWeight:"700", color:"wheat"}}>Read More</text>
                  </div>
                </div>
              </div>
              <div className="des"><img src={courses[selected].img} style={{width:"100%", height:"-webkit-fill-available"}}/></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
