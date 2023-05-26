import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import SimpleImageSlider from "react-simple-image-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { reviews } from "../../constant/home";
import "../../css/Testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials-container">
        <div className="testimonials-heading">Testimonials</div>
        <div className="testimonials-carousel">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={false}
            interval={6100}
            infiniteLoop={true}
            transitionTime={1000}
            swipeScrollTolerance={5}
            width={"100%"}
          >
            {reviews.map((review, index) => (
              <div key={index} className="testimonial">
                <div className="testimonial-image">
                  <img src={review.img} alt={review.name} />
                </div>
                <div className="testimonial-review">
                  <h3>{review.name}</h3>
                  <h4>{review.subtext}</h4>
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
