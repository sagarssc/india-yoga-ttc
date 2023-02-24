import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  // { url: "url('/home/slide/1.png')" },
  // { url: "url('/home/slide/2.png')" },
  // { url: "url('/home/slide/3.png')" },
  // { url: "url('/home/slide/4.png')" },
  // { url: "url('/home/slide/5.jpg')" },
  // { url: "url('/home/slide/6.jpg')" },
  // { url: "url('/home/slide/7.jpg')" },
  // { url: "url('/home/slide/8.jpg')" },
  // { url: "url('/home/slide/9.jpg')" },
  // { url: "url('/home/slide/10.jpg')" },
  // { url: "url('/home/slide/11.jpg')" },
  // { url: "url('/home/slide/12.jpg')" },
  // { url: "url('/home/slide/13.jpg')" },
  // { url: "url('/home/slide/15.jpg')" },
  // { url: "url('/home/slide/16.jpg')" },
  // { url: "url('/home/slide/17.jpg')" },
  // { url: "url('/home/slide/18.jpg')" },
  // { url: "url('/home/slide/19.jpg')" },
  // { url: "url('/home/slide/20.jpg')" },
  // { url: "url('/home/slide/21.jpg')" },
  // { url: "url('/home/slide/22.jpg')" },
  // { url: "url('/home/slide/23.jpg')" },
  // { url: "url('/home/slide/24.jpg')" },
  // { url: "url('/home/slide/25.jpg')" },
  // { url: "url('/home/slide/26.jpg')" },
  { url: "url('/home/slide/29.jpg')" },

];

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
    }, 5000); 
  }

  // unmounting for preventing memory leakes.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { bg_img } = this.state;
    return (
      <div className="slide-image">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: bg_img.url,
          }}
        ></div>
      </div>
    );
  }
}
