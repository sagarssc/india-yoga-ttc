import React, { useEffect, useState } from 'react';
import "../../css/syllabus.css"

const Syllabus = (props) => {
  let syllabus = props.syllabus
  return (
    <div className="syllabus-container">
      <text style={{width:"100%", textAlign:"center", fontSize:"32px", fontWeight:"700", marginBottom:"2rem", fontFamily:"Roboto Slab"}}>Curriculum</text>
      {syllabus.map((section, index) => (
        <div className="section" key={index}>
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
