import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login/login.component";
import SignUp from "./components/login/signup.component";

import Navbar from "./components/defaults/navbar";
import Home from  "./components/home/home";
import Footer from './components/defaults/footer';

function App() {
  return (<Router>
      <div className="app">
      <Navbar/>
      <div className='background'>
      <Home />
      <Footer />
      </div>
      </div>
    </Router>
  );
}

export default App;
