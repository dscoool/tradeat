/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const PriceInfo = ({ className }) => {
  return (
    <div className={`price-info ${className}`}>
      <div className="overlap-group">
        <div className="price">250,000KRW</div>
        <div className="stock">SOL/KRW</div>
        <img className="solana" alt="Solana" src="/img/solana-1.png" />
      </div>
    </div>
  );
};
