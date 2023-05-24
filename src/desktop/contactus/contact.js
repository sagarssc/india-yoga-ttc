import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "../defaults/slider";
import ExtraDiv from "../defaults/extraDiv";
import Gallery from "../defaults/gallery";
import { contactus, icons, social_images } from "../../constant/default";
import MapComponent from '../defaults/googleMap';
import QueryForm from '../defaults/queryForm';
import { extraDetailsAboutUs, teachers, constBaseUrl } from "../../constant/constant";
import "../../css/Contact.css"; // Import the CSS file for Contact component

const backgroundImage = constBaseUrl + '/images/slider/6.jpg';

export default class Contact extends Component {
  render() {
    let contacts = contactus;
    return (
      <div className="contact-container">
        <div className="blocks">
          <div
            className="contact-background"
            style={{ backgroundImage: "url(" + backgroundImage + ")" }}
          ></div>
        </div>
        <div className="contact-details">
          <div className="heading">Contact Details</div>
          <div className="contact-list">
            {contactus.ContactDetails.map((contact, index) => (
              <div className="contact-item" key={index}>
                <div
                  className="contact-icon"
                  style={{ backgroundImage: contact.icon }}
                ></div>
                <div className="contact-info">
                  <p className="contact-heading">{contact.heading}</p>
                  <a href={contact.ref} target="_blank" className="contact-link">
                    <p>{contact.value}</p>
                  </a>
                </div>
              </div>
            ))}
            <div className="social-media">
              <p className="follow-heading">Follow Us on</p>
              <div className="social-icons">
                {social_images.map((social, index) => (
                  <div className="social-icon" key={index}>
                    <a href={social.url} target="_blank">
                      <img src={social.img} alt="social-icon" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-background"></div>
          <QueryForm />
        </div>
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    );
  }
}
