/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ExecuteOrderButton = ({ className, text = "Sell" }) => {
  return (
    <div className={`execute-order-button ${className}`}>
      <div className="sell">{text}</div>
    </div>
  );
};

ExecuteOrderButton.propTypes = {
  text: PropTypes.string,
};
