import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { extraDetails, social_images } from "../../constant/constant";

function description(text, heading) {
  return (
            <div className="circle" style={{display:"flex", boxShadow:".5rem .5rem .5rem .5rem rgb(0 0 0 / 64%)"}}>
                <div style={{width:"20%", paddingTop:"1rem"}}><img src="./icons/s-icon.png" style={{width:"100%"}}/></div>
                <div style={{width:"80%", textAlign:"left", lineHeight:"20px"}}>
                  <div style={{marginTop:"4%"}}><text style={{fontSize:"24px", fontWeight:"700", fontFamily:"'Poppins', sans-serif"}}>{heading}</text></div>
                  <text style={{fontSize:"20px"}}>{text}</text>
                </div>
            </div>
  )
}

const heading = "Yoga Asana"
const line = "The Yoga Trainings practice of Aasanas and pranayama is imperative for a Yogi to fortify the mind, body, and soul."

const CircularBlocks = [
  {heading:"Pranayama", line:"Yogic Breathing,  Nadi Shodhna,  Bhastrika,  Bhramri,  Surya Bhedna,  Ujjayi pranayama,  Chandra Bhedna,  Sheetli ,  Sheetkari."},
  {heading:"Meditation", line:"Mindfulness, Open awareness meditation, Humming meditation, Mantra meditation, Vipassana, Yoga Nidra, Loving kindness meditation, Dynamic meditation."},
  {heading:"Yoga Anatomy", line:"Digestive system, Respiratory system, Circulatory system, Nervous system, Endocrine system, Muscular system, Skeleton system."},
  {heading:"Shatkarmas (cleansing)", line:"Neti (Nasal cleansing), Dhauti (Digestive cleansing), Basti (Yogic enema), Nauli (Abdominal churning), Kapalbhati (Skull shine breathing), Trataka (Still gazing)."},
  {heading:"Body Alignment", line:"Detailed explanation of all the postures of Ashtanga series with correct body alignment and modifications according to student’s limitations."},
  {heading:"Yoga Philosophy", line:"Meaning and evolution of yoga, Patanjali’s yoga sutras, Four paths of yoga, Mudras, Bandhas, Lifestyle of yogis, Chakras, Tri gunas, Karma theory."},

]
export default class CircularDiv extends Component {
  render() {
      let {extraDetails} = this.props
        return (
          <div style={{backgroundColor:"#ffffff00" ,backgroundImage:"url('./icons/logo.png')", backgroundRepeat:"no-repeat", backgroundAttachment:"scroll", backgroundPosition:"center", paddingBottom:"2%"}}>
            <div className="first-line">
              {description(CircularBlocks[0].line, CircularBlocks[0].heading)}
            </div>
            <div className="double-circle">
              <div style={{width:"40%"}}>
                {description(CircularBlocks[1].line, CircularBlocks[1].heading)}
              </div>
              <div style={{width:"40%"}}>
                {description(CircularBlocks[2].line, CircularBlocks[2].heading)}
              </div>
            </div>
            <div className="double-circle">
              <div style={{width:"40%"}}>
                {description(CircularBlocks[3].line, CircularBlocks[3].heading)}
              </div>
              <div style={{width:"40%"}}>
                {description(CircularBlocks[4].line, CircularBlocks[4].heading)}
              </div>
            </div>
            <div className="first-line">
              {description(CircularBlocks[5].line, CircularBlocks[5].heading)}
            </div>
          </div>
        );
    }
}
