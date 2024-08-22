import React from "react";
import { Amount } from "../../components/Amount";
import { AmountKrw } from "../../components/AmountKrw";
import { Buy } from "../../components/BuyTrailing";
import { DrawUp } from "../../components/DrawUp";
import { ExecuteOrderButton } from "../../components/ExecuteOrderButton";
import { Menu } from "../../components/Menu";
import { PriceInfo } from "../../components/PriceInfo";
import { TD } from "../../components/TD";
import { Trailing } from "../../components/Trailing";
import { TriggerPrice } from "../../components/TriggerPrice";
import "./style.css";

export const BuyTrailing = () => {
  return (
    <div className="buy-trailing">
      <div className="div-2">
        <div className="background-white" />
        <img className="line-2" alt="Line" src="/img/line-2.svg" />
        <Buy
          className="buy-instance"
          divClassName="buy-2"
          line="/img/line-3.svg"
          lineClassName="design-component-instance-node"
        />
        <div className="div-wrapper">
          <div className="text-wrapper-12">Sell</div>
        </div>
        <div className="limit">
          <div className="text-wrapper-13">Limit</div>
        </div>
        <Trailing className="trailing-instance" />
        <PriceInfo className="price-info-instance" />
        <TriggerPrice className="trigger-price-instance" />
        <input className="frame" />
        <DrawUp className="draw-down" text="Draw-down&nbsp;&nbsp; (%)" />
        <input className="draw-down-wrapper" />
        <TD className="t-d-instance" />
        <input className="input" />
        <Amount className="amount-instance" text="Quantity" />
        <input className="t-d-2" />
        <AmountKrw className="amount-KRW-instance" />
        <input className="amount-KRW-2" />
        <div className="text-wrapper-14">Total: 0.00</div>
        <ExecuteOrderButton className="execute-order-button-instance" text="Buy" />
        <Menu
          className="menu-instance"
          divClassName="menu-2"
          divClassName1="menu-3"
          divClassName2="menu-4"
          divClassName3="menu-3"
          divClassNameOverride="menu-3"
          img="/img/vector-6.svg"
          text="Trade"
          vector="/img/vector-5.svg"
          vector1="/img/vector-7.svg"
          vector2="/img/vector-8.svg"
          vector3="/img/vector-9.svg"
        />
      </div>
    </div>
  );
};
