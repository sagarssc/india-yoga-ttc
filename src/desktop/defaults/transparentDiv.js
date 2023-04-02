import React from "react";
import { useNavigate } from "react-router-dom";
import { Transparent } from "../../constant/home";
import "../../index.css";

const TransparentDiv = () => {

  return (
    <div
      style={{
        width: "40%",
        height: "100%",
        backgroundColor: "#e4dadab8",
        marginLeft: "10%",
        borderTopLeftRadius: "10rem",
        borderBottomRightRadius: "10rem",
        padding: "8%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          margin: "auto",
          fontSize: "22px",
          lineHeight: "1.5",
          textAlign: "justify",
          marginBottom: "2rem",
        }}
      >
        {Transparent.quote}
      </p>
      <h5
        style={{
          margin: "auto",
          fontSize: "22px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        — {Transparent.author}
      </h5>
    </div>
  );
};

export default TransparentDiv;

