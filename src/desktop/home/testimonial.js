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
      <div style={{marginLeft:"20%"}}>
        <Carousel slide={1} width="80%" showIndicators={false} showStatus={false}>
          {reviews.map((review, index) => (
            <div className="testimonial">
              <div className="student-image">
                <img src={review.img} />
              </div>
              <div className="student-review">
                <text className="review">{review.review}</text>
                <text style={{ fontSize: "0.8rem" }}>
                  {review.name} ({review.subtext})
                </text>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
