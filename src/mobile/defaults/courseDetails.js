import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { courses } from "../../constant/constant";


export default class CourseDetails extends Component {
    render() {
      let {index, displayTitle} = this.props
      let title = courses[index].name;
      let details = courses[index].details
      let hrs = index
        return (
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
            {displayTitle ? <text style={{ fontSize: "unset", fontFamily: "'Poppins', sans-serif" }}>
              {title}
            </text>:
            <div style={{padding:"1.5rem"}}></div>
            }
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
                      <text style={{fontSize:"large"}}>{detail.title}</text>
                      <text style={{fontSize:"large"}}>{detail.value}</text>
                    </div>
                    <hr style={{ borderTop: "2px solid #5C5889" }} />
                  </div>
                ))}
                {displayTitle && <div style={{ height:"5rem"}}>
                  <div onClick={()=>this.props.onReadMore()} style={{width:"50%", backgroundColor:"#5c5889", height:"4rem", borderRadius:"2rem", display:"inline-flex", marginTop:"1rem", boxShadow:"-2px 3px 5px 5px", justifyContent:"center", paddingTop:"3%"}}>
                    <text style={{fontWeight:"700", color:"wheat"}}>Read More</text>
                  </div>
                </div>}
              </div>
              <div className="des"><img src={courses[index].img} style={{width:"100%", height:"-webkit-fill-available"}}/></div>
            </div>
          </div>
        );
    }
}
