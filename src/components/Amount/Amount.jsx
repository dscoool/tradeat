/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import "./style.css";

export const Amount = ({ className, text = "Amount (SOL)" }) => {
  return (
    <div className={`amount ${className}`}>
      <div className="overlap-group-2">
        <div className="amount-SOL">{text}</div>
        <div className="text-wrapper-5">SOL</div>
        <img className="img" alt="Solana" src="/img/solana-1.png" />
        <ChevronDown1 className="chevron-down" />
      </div>
    </div>
  );
};

Amount.propTypes = {
  text: PropTypes.string,
};
