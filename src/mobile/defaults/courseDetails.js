import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { courses } from "../../constant/constant";


export default class CourseDetails extends Component {
    render() {
      let {index, displayTitle, displayReadMore} = this.props
      let title = courses[index].name;
      let details = courses[index].details
      let ref_link = courses[index].link
      let hrs = index
        return (
          <div
            style={{

              height: "32rem",
              backgroundColor:"white",
              backgroundImage:"url('./home/bg/3.png')",
              backgroundPosition: "left",
              backgroundRepeat:"no-repeat",
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
                display: "block",
                width: "100%",
                height: "80%",
                paddingRight: "4%",
                paddingTop: "1.2%"
              }}
            >
              {/* <div className="des2"><img src={courses[index].img} style={{width:"100%", height:"-webkit-fill-available"}}/></div> */}
              <div
                style={{
                  width: "100%",
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
                      <text style={{fontSize:"large", fontWeight:"500"}}>{detail.title}</text>
                      <text style={{fontSize:"large", fontWeight:"500"}}>{detail.value}</text>
                    </div>
                    <hr style={{ borderTop: "2px solid #5C5889" }} />
                  </div>
                ))}
                {(displayTitle || displayReadMore) && <div style={{ height:"5rem"}}>
                <Link to={ref_link} className="link"><div style={{width:"50%", backgroundColor:"#5c5889", height:"4rem", borderRadius:"2rem", display:"inline-flex", marginTop:"1rem", boxShadow:"-2px 3px 5px 5px", justifyContent:"center", paddingTop:"2%"}}>
                    <text style={{fontWeight:"700", color:"wheat"}}>Read More</text>
                  </div></Link>
                </div>}
              </div>
            </div>
          </div>
        );
    }
}
