import React, { useRef } from "react";
import Hero from "./Components/Hero";
import "./App.css";
import Template from "./Components/Template";
import { FaCircleArrowDown } from "react-icons/fa6";
import Card from "./Components/Card";

function App() {
  const btnRef = useRef();

  const handleBtn = () => {
    if (btnRef.current) {
      btnRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="container-fluid px-2 pt-5"
      style={{ backgroundColor: "#ECEEEF" }}
    >
      <Hero>
        <div className="d-flex justify-content-center ">
          <FaCircleArrowDown
            size={"66"}
            className="rounded-circle shadow p-2 animate__animated animate__infinite animate__zoomIn"
            onClick={handleBtn}
          />
        </div>
      </Hero>
      <Template>
        <h4 className="text-center fs-3 fw-bold" ref={btnRef}>
          Available Template
        </h4>
      </Template>
      <div className="row p-2 mx-auto justify-content-center align-items-center" style={{gap:"2rem"}}>
        <Card />
      </div>
    </div>
  );
}

export default App;
