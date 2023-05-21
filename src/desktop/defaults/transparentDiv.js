import React from "react";
import { useNavigate } from "react-router-dom";
import { Transparent } from "../../constant/home";
import "../../index.css";
import "../../css/transparentDiv.css"
const TransparentDiv = () => {
  return (
    <div className="transparent-container">
      <p className="transparent-quote">{Transparent.quote}</p>
      <h5 className="transparent-author">— {Transparent.author}</h5>
    </div>
  );
};

export default TransparentDiv;
