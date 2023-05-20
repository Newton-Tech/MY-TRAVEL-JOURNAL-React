import React from "react";

import "./content.css";
const Content = (props) => {
  {
    /* id image location name  date description */
  }
  return (
    <div className="content-container">
      <img src={props.image} />
      <div className="content-text">
        <div className="content-location">
          <i
            className="fa-sharp fa-solid fa-location-dot"
            style={{ color: "#ea063f" }} // Updated style prop
          ></i>
          <h1>{props.location}</h1>
          <p className="view-map">View on Google Map</p>
        </div>

        <h3>{props.name}</h3>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Content;
