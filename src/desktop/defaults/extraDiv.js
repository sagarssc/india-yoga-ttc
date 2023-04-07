import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { extraDetails } from "../../constant/constant";
import { social_images } from "../../constant/default";
import { Slide } from 'react-reveal';

export default class ExtraDiv extends Component {
  render() {
    let { extraDetails } = this.props;
    return (
      <div>
        {extraDetails.map((details, index) => (
            <div
              style={{
                backgroundColor: "white",
                marginBottom: "2rem",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "100%",
                  // height: "32rem",
                  backgroundImage: `url(${
                    index % 2 === 0
                      ? "./home/bg/2.png"
                      : "./home/bg/3.png"
                  })`,
                  backgroundPosition: index % 2 === 0 ? "top right" : "top left",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                <Slide duration={1500} key={index} left={index % 2 !== 0} right={index % 2 === 0}>

                  <div
                    style={{
                      width: "45%",
                      margin: "2%",
                    }}
                  >
                    <img
                      src={details.img}
                      alt=""
                      className= {index % 2 === 0 ? "left-image" : "right-image"}
                      style={{
                        width: "100%",
                        height: "90%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                  </div>
                </Slide>
                <Slide duration={1500} key={index} left={index % 2 === 0} right={index % 2 !== 0}>

                  <div
                    style={{
                      width: "45%",
                      margin: "2%",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: "500",
                        fontFamily: "Lato",
                      }}
                    >
                      {details.heading}
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "300",
                        fontFamily: "Palatino",
                        textAlign: "justify"
                      }}
                    >
                      {details.content}
                    </p>
                    {details.social && (
                      <div
                        style={{
                          width: "100%",
                          height: "10rem",
                          marginTop: "10%",
                          paddingTop: "10%",
                          display: "inline-flex",
                          justifyContent: "space-around",
                        }}
                      >
                        {social_images.map((social, index) => (
                          <div key={index}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noreferrer"
                              className="link"
                            >
                              <img
                                src={social.img}
                                alt=""
                                style={{ height: "50%" }}
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Slide>

              </div>
            </div>
        ))}
      </div>
    );
  }
}
