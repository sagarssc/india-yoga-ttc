import React from "react";
import { CircularBlocks } from "../../constant/home";
import "../../css/circularDiv.css"; // import the CSS file for styles

function Description({ text, heading }) {
  return (
    <div className="circle">
      <div className="icon-container">
        <img src="./icons/s-icon.png" alt="icon" className="icon" />
      </div>
      <div className="text-container">
        <h2 className="heading">{heading}</h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

function CircularDiv({ extraDetails }) {
  return (
    <div className="circular-div">
      <div className="line">
        <Description
          heading={CircularBlocks[0].heading}
          text={CircularBlocks[0].line}
        />
      </div>
      <div className="double-circle">
        <div className="circle-container">
          <Description
            heading={CircularBlocks[1].heading}
            text={CircularBlocks[1].line}
          />
        </div>
        <div className="circle-container">
          <Description
            heading={CircularBlocks[2].heading}
            text={CircularBlocks[2].line}
          />
        </div>
      </div>
      <div className="double-circle">
        <div className="circle-container">
          <Description
            heading={CircularBlocks[3].heading}
            text={CircularBlocks[3].line}
          />
        </div>
        <div className="circle-container">
          <Description
            heading={CircularBlocks[4].heading}
            text={CircularBlocks[4].line}
          />
        </div>
      </div>
      <div className="line">
        <Description
          heading={CircularBlocks[5].heading}
          text={CircularBlocks[5].line}
        />
      </div>
    </div>
  );
}

export default CircularDiv;
