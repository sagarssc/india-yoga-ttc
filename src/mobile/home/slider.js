import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/slide.png" },
  { url: "/slide.png" },
  { url: "/slide.png" },
  { url: "/slide.png" },
  { url: "/slide.png" },
  { url: "/slide.png" },
  { url: "/slide.png" },
];

export default class Slider extends Component {
    render() {
        return (
          <div className='slide-image'>
            <SimpleImageSlider
              width={'100%'}
              height={'100%'}
              images={images}
              showBullets={true}
              style={{ position: "relative", borderRadius: "2rem" }}
              showNavs={false}
            />
          </div>
        );
    }
}
