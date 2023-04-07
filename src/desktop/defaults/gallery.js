import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {galleryImages} from "../../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Modal, Backdrop, Fade, IconButton } from "@material-ui/core";
import { Close, ArrowBack } from "@material-ui/icons";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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
  constructor(props) {
    super(props);
    this.state = {
      images : galleryImages,
      selectedIndex: null,
      autoPlay: true,
      open: false
    };
  }

  handleImageClick = (index) => {
    let {autoPlay} = this.state
    this.setState({ selectedIndex: index, open: true, autoPlay: !autoPlay  });
  };

  handleClose = () => {
    let {autoPlay} = this.state
    this.setState({ open: false, autoPlay: !autoPlay });
  };


  handleNextClick = () => {
    const { selectedIndex, images, } = this.state;
    const { length } = images;
    const nextIndex = selectedIndex === length - 1 ? 0 : selectedIndex + 1;
    this.setState({ selectedIndex: nextIndex });
  };

  handlePrevClick = () => {
    const { selectedIndex, images} = this.state;
    const { length } = images;
    const prevIndex = selectedIndex === 0 ? length - 1 : selectedIndex - 1;
    this.setState({ selectedIndex: prevIndex });
  };

  render() {
    const { selectedIndex, images, autoPlay, open } = this.state;
    const selectedImage = images[selectedIndex];

    return (
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? autoPlay : false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((image, index) => (
            <button
              key={index}
              style={{
                backgroundImage: `url(${image.url})`,
                width: "90%",
                height: "20rem",
                backgroundSize: "100% 100%",
                cursor: "pointer"
              }}
              onClick={() => this.handleImageClick(index)}
            />
          ))}
        </Carousel>
        <Modal
          open={open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
              <div style={{ maxWidth: "80vw" }}>
                <IconButton
                  style={{ 
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "1rem",
                    color: "white"
                  }}
                  onClick={()=>this.handlePrevClick()}
                >
                  <NavigateBeforeIcon style={{ fontSize: "6.5rem", cursor: "pointer" }}/>
                </IconButton>
                <img src={images[selectedIndex]?.url} style={{ maxWidth: "100%" }} alt={`image-${selectedIndex}`} />
                <IconButton
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "1rem",
                    color: "white",
                  }}
                  onClick={()=>this.handleNextClick()}
                >
                  <NavigateNextIcon style={{ fontSize: "6.5rem", cursor: "pointer" }}/>
                </IconButton>
                <IconButton 
                  style={{ 
                    position: "absolute",
                    top: '1rem',
                    right: '0.5rem',
                    color: "white",
                  }}
                  onClick={this.handleClose}>
                  <Close style={{ fontSize: "3rem", cursor: "pointer" }}/>
                </IconButton>
              </div>
            </div>
          </Fade>
        </Modal>
        {/* {selectedImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex:99999
            }}
            // onClick={() => this.handleImageClick(null)}
          >
            <button onClick={()=>this.handlePrevClick()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
              src={selectedImage.url}
              alt="Selected Image"
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            />
            <button onClick={()=>this.handleNextClick()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )} */}
      </div>
    );
  }
}
