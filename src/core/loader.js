import { Vortex } from 'react-loader-spinner'
import React, { Component } from "react";

export function Loader(){
  return(
    <Vortex
      visible={true}
      height="100"
      width="100"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
  )
}
