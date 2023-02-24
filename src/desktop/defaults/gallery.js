import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {galleryImages} from "../../constant/constant";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default class Gallery extends Component {
  render() {
    let images = galleryImages
    return (
      <div>
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
                {images.map((image,index) => (
                <div style={{backgroundImage:image.url, width:"90%", height:"20rem", backgroundSize:"100% 100%"}}></div>
                ))}
            </Carousel>
      </div>
    );
  }
}
