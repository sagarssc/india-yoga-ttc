import React, { Component } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export function CustomPopUp(props){
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="popup-box">
      <div className="box">
        <div style={{textAlign:"center", fontSize:"25px", fontWeight:"700", lineHeight:"5rem"}}><text>{props.content.mainContent}</text></div>
        <div style={{textAlign:"center", fontSize:"18px", fontWeight:"700"}}><text>{props.content.subContent}</text></div>
        <div onClick={(e)=>handleSubmit(e)} style={{textAlign:"center", width:"5%", lineHeight:"2rem", margin:"auto", marginTop:"2rem", color:"white", fontSize:"20px", backgroundColor:"gray"}}>ok</div>
      </div>
    </div>
  );
};