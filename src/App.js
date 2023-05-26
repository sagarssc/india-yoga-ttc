import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./desktop/login/login.component";
import SignUp from "./desktop/login/signup.component";

import Navbar from "./desktop/defaults/navbar";
import Home from  "./desktop/home/home";
import Footer from './desktop/defaults/footer';
import Hrs100 from './desktop/courses/hrs';
import DesktopMain from './desktopMain';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Helmet } from 'react-helmet';


function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <div>
      <Helmet>
        <title>India Yoga TTC</title>
      </Helmet>
      <DesktopMain />
    </div>
  );
}

export default App;
