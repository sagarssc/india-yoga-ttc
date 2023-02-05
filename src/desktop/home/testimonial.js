import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import { Carousel } from "@trendyol-js/react-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const reviews = [
  {
    img: "/slide.png",
    review: "denj fwejrnk fewr fw fw fw fdw w",
    name: "Sagar Singh Chauhan",
    subtext: "March 2021",
  },
  {
    img: "/slide.png",
    review: "fdewjnfw fwjnkw fwkj fwnfw wdf w fw www",
    name: "Sagar Singh Chauhan1",
    subtext: "March 2021",
  },
  {
    img: "/slide.png",
    review: "mkdw dfewkjdfew dfwskfwr fekw dekwcew dfew fdew fwe",
    name: "Sagar Singh Chauhan2",
    subtext: "March 2021",
  },
  {
    img: "/slide.png",
    review: "fdew fwe fw fw fwef fwe fwe fw fw fw fwewwrew",
    name: "Sagar Singh Chauhan3",
    subtext: "March 2021",
  },
];

export default class Testimonials extends Component {
  render() {
    return (
      <div style={{paddingBottom:"5%", backgroundImage:"url('/home/bg/header.png')"}}>
      <div style={{width:"100%", alignText:"center", marginBottom:"2rem",paddingTop:"2rem", fontFamily:"serif", fontSize:"larger"}}>Testimonials</div>
      <div style={{borderBottom: "0px"}}>
        <Carousel slide={1} showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}>
          {reviews.map((review, index) => (
            <div className="testimonial" style={{backgroundImage:"url('/home/bg/3.png')", backgroundPosition:"top left"}}>
              <div className="student-image">
                <img src={review.img} />
              </div>
              <div className="student-review">
                {/* <p style={{ fontSize: "0.8rem", color:"black"}}> */}
                <h3> {review.name} </h3><h4> ({review.subtext})</h4>
                {/* </p> */}
                <p className="review">{review.review}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    );
  }
}
