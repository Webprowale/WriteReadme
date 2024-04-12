import React from "react";
import "animate.css";


function Hero({ children }) {
  return (
    <div
      className="container px-md-5 d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '100dvh'
      }}
    >
      <h3 className=" fw-bold  text-md-center mt-md-2 heroT">
        The easiest way to create a
      </h3>
      <div className="d-md-flex justify-content-lg-center ">
        <div className=" pattern"></div>
        <h2 className=" fw-bold text-success textS" style={{ fontSize: "4rem" }}>
          README File
        </h2>
      </div>
      {children}
    </div>
  );
}

export default Hero;
