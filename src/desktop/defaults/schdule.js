import React, { Component } from "react";
import {KeyPoints} from "../../constant/keyPoint";
import {CoursePage} from "../../constant/constant";
import CourseDetails from "../defaults/courseDetails"
import { schdules } from "../../constant/default";

export default class Schdule extends Component {
  render() {
    let {hrs} = this.props
    let schdule = schdules[100]
    return (
      <div style={{width:"100%"}}>
        <table style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
          <tr>
            {schdule.headers.map((header,index) => (
              <th style={{border:"2px solid grey", textAlign:"center"}}>{header}</th>
            ))}
          </tr>
          {schdule.details.map((detail, index)=>(
            <tr>
              <td style={{width:"10%", fontSize:"18px", border:"2px solid grey", textAlign:"center", lineHeight:"3rem"}}>{detail.time}</td>
              <td style={{width:"10%", fontSize:"18px", border:"2px solid grey", textAlign:"center", lineHeight:"3rem"}}>{detail.class}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}


