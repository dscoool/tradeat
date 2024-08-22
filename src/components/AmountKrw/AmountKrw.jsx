/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import "./style.css";

export const AmountKrw = ({ className }) => {
  return (
    <div className={`amount-KRW ${className}`}>
      <div className="overlap-group-3">
        <div className="text-wrapper-6">Amount (KRW)</div>
        <div className="text-wrapper-7">KRW</div>
        <img className="KRW" alt="Krw" src="/img/krw.png" />
        <ChevronDown1 className="chevron-down-1" />
      </div>
    </div>
  );
};
