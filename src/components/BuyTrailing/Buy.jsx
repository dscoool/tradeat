import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buy = ({ className, lineClassName, line = "/img/line-1.svg", divClassName }) => {
  return (
    <div className={`buy ${className}`}>
      <img className={`line ${lineClassName}`} alt="Line" src={line} />
      <div className={`text-wrapper ${divClassName}`}>Buy</div>
    </div>
  );
};

Buy.propTypes = {
  line: PropTypes.string,
};
