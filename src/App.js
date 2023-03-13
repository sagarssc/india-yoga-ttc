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
import MobileMain from "./mobileMain";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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

  const isDesktopScreen = width > 1023
  return (
    <div>
      {/* <BrowserView><DesktopMain /></BrowserView>
      <MobileView><MobileMain /></MobileView> */}
    {isDesktopScreen ? <DesktopMain /> : <MobileMain />}
    </div>
  );
}

export default App;
