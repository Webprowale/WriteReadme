import React from "react";
import { data } from "../Data";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      {data.map((item, index) => (
        <div className="col-md-6 card bg-white rounded shadow" style={{ width: "28rem" }} key={index}>
          <div className="card-body">
            <small className="text-white bg-success rounded p-1 fw-semibold">{item.cat}</small>
            <h5 className="card-title fw-bold fs-4 mt-4">{item.projectName}</h5>
            <p className="card-text lead fs-6">
              {item.description}
            </p>
            <Link href="#" className="card-link text-primary">
              Edit template
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
