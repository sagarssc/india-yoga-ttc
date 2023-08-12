import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { courses } from "../../constant/constant";
import CourseDetails from "../defaults/courseDetails";
import "../../css/coursesDiv.css"
const Courses = ({ selectCourse }) => {
  const [selected, setSelected] = useState('100');
  const [show, setShow] = useState(true);
  const [details, setDetails] = useState(courses['100'].details);
  const isMobile = window.innerWidth <= 768;


  const showDetails = (index) => {
    const title = courses[index].name;
    setShow(true);
    const details = courses[index].details;
    setSelected(index);
    setDetails(details);
  };

  return (
    <div>
      {!isMobile ? 
        <div className="courses">
          {Object.entries(courses).map(([index, course]) => (
            !!!course.hide && (
              <div key={index}>
                {selected === index ? (
                  <div
                    className="selected-course"
                    onClick={() => showDetails(index)}
                    // style={{ backgroundImage: "url('./home/bg/header.png')" }}
                  >
                    <text style={{ margin: "4rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>{course.name}</text>
                  </div>
                ) : (
                  <div className="course" onClick={() => showDetails(index)}>
                    <text style={{ margin: "4rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>{course.name}</text>
                  </div>
                )}
              </div>
            )
          ))}
        </div> 
        : 
        <div className="courses">
        {Object.entries(courses).map(([index, course]) => (
          !!!course.hide && (
            <CourseDetails index={index} displayTitle={true} onReadMore={() => selectCourse(index)} />
          )
        ))}
        </div>
      }
      {show && !isMobile && (
        <CourseDetails index={selected} displayTitle={true} onReadMore={() => selectCourse(selected)} />
      )}
    </div>
  );
};

export default Courses;
