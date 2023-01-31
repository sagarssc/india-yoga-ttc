import React from "react";

export const getDevider = (title) => {
  return(
    <div>
    {title != "" && <p> {title} </p>} 
    <img src="/divider.png" style={{width:"50%"}}/>
    </div>
    )
}