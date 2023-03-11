import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import  Carousel from "nuka-carousel";
import { sliderImages } from "../../constant/constant";

const images = sliderImages

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_index: 0,
      bg_img: images[0]
    };
  }

  componentDidMount() {
    this.changeColor()
  }

  changeColor() {
    let {img_index} = this.state
    let l = images.length
    img_index = ( img_index + 1 )% l
    setInterval(() => {
      this.setState({
        bg_img: images[img_index],
        img_index: img_index
      }, this.changeColor());
    }, 3000); 
  }

  // unmounting for preventing memory leakes.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { bg_img } = this.state;
    return (
      <div className="slide-image">
        {/* <div
          style={{
            width: "100%",
            height: "90%",
            backgroundSize: "100% 100%",
            backgroundImage: bg_img.url,
          }}
        ></div> */}
        <Carousel animation="zoom" autoplay={true} autoplayInterval={3000} withoutControls={true} pauseOnHover={false}> 
          {
            images.map((image, index) => (
              <img src={image.url} style={{width:"100%", height:"100%", backgroundSize:"100% 100%"}}/>
            ))}
        </Carousel>
      </div>
    );
  }
}
