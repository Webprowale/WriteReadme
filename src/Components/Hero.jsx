import React from "react";
import "animate.css";

function Hero({ children }) {
  return (
    <div
      className="container px-md-5 pt-md-5 mt-md-5 pb-lg-5"
      style={{ height: "100dvh" }}
    >
      <h3 className=" fw-bold  text-md-center mt-md-5 heroT">
        The easiest way to create a
      </h3>
      <div className="d-md-flex justify-content-md-center mb-md-5 pb-lg-5">
        <div className=" pattern"></div>
        <h2 className=" fw-bold text-success" style={{ fontSize: "4rem" }}>
          README File
        </h2>
      </div>
      {children}
    </div>
  );
}

export default Hero;
