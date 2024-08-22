/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Menu = ({
  className,
  vector = "/img/vector.svg",
  divClassName,
  img = "/img/vector-1.svg",
  divClassNameOverride,
  vector1 = "/img/vector-2.svg",
  divClassName1,
  text = "Rewards",
  vector2 = "/img/vector-3.svg",
  divClassName2,
  vector3 = "/img/vector-4.svg",
  divClassName3,
}) => {
  return (
    <div className={`menu ${className}`}>
      <div className="group">
        <img className="vector" alt="Vector" src={vector} />
        <div className={`text-wrapper-8 ${divClassName}`}>Home</div>
      </div>
      <div className="group-2">
        <img className="vector-2" alt="Vector" src={img} />
        <div className={`text-wrapper-9 ${divClassNameOverride}`}>Portfolio</div>
      </div>
      <div className="group-3">
        <img className="vector-3" alt="Vector" src={vector1} />
        <div className={`text-wrapper-9 ${divClassName1}`}>{text}</div>
      </div>
      <div className="group-4">
        <img className="vector-4" alt="Vector" src={vector2} />
        <div className={`text-wrapper-10 ${divClassName2}`}>Market</div>
      </div>
      <div className="group-5">
        <img className="vector-5" alt="Vector" src={vector3} />
        <div className={`text-wrapper-11 ${divClassName3}`}>Profile</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  text: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
};
