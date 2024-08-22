import React from "react";
import "./style.css";
import { SwipeHandle } from "../../components/SwipeHandle";
import { FetchCoinPrice, CoinPriceDelta } from '../../components/Bitthumb/priceinquiry'; 

export const Market = () => {
  return (
    <div className="market">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <div className="overlap-group">
              <div className="group">
                <div className="overlap-group-2">
                  <div className="text-wrapper">Dogecoin</div>
                  <div className="text-wrapper-2">₹23.39</div>
                  <div className="text-wrapper-3">DOGE</div>
                  <div className="text-wrapper-4"></div>
                  <img
                    className="img"
                    alt="Img"
                    src="https://c.animaapp.com/FbWYnmJT/img/1597d628dd19b7885433a2ac2d7de6ad196c519aeab4bfe679706aacbf1df78a@2x.png"
                  />
                  <img className="vector" alt="Vector" src="https://c.animaapp.com/FbWYnmJT/img/vector-3-1.svg" />
                </div>
              </div>
              <div className="text-wrapper-5">Trade</div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper">Solana</div>
                <FetchCoinPrice coin="KRW-SOL" />
                <div className="text-wrapper-3">SOL</div>
                <img
                  className="img"
                  alt="Img"
                  src="https://c.animaapp.com/FbWYnmJT/img/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da@2x.png"
                />
                <div className="text-wrapper-7"></div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <FetchCoinPrice coin="KRW-BTC" />
                        <div className="group-2">
                  <div className="text-wrapper-9">Bitcoin</div>
                  <div className="text-wrapper-10">BTC</div>
                </div>
                <div className="text-wrapper-11">
                  {/* <CoinPriceDelta coin = "KRW-BTC" /> */}
                </div>
                <img
                  className="img"
                  alt="Img"
                  src="https://c.animaapp.com/FbWYnmJT/img/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2@2x.png"
                />
              </div>
            </div>
            <div className="group-wrapper">
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper">Ethereum</div>
                    <FetchCoinPrice coin="KRW-ETH" />
                  <div className="text-wrapper-3">ETH</div>
                  <div className="text-wrapper-11"></div>
                  <img
                    className="img"
                    alt="Img"
                    src="https://c.animaapp.com/FbWYnmJT/img/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-group-2">
                <div className="text-wrapper">Bitcoin Gold</div>

                <FetchCoinPrice coin="KRW-BTG" />
                <div className="text-wrapper-3">BTG</div>
                <div className="text-wrapper-13"></div>
                <img
                  className="img"
                  alt="Img"
                  src="https://c.animaapp.com/FbWYnmJT/img/3c5b36c70a05bad40eee4f711aeefbb1809169a17db047bf91f1ef45828349e5@2x.png"
                />
              </div>
            </div>
            <div className="group-4">
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper">Riple</div>
                  <FetchCoinPrice coin="KRW-XRP" />
                  <div className="text-wrapper-3">XRP</div>
                  <div className="text-wrapper-14">-</div>
                  <img
                    className="img"
                    alt="Img"
                    src="https://c.animaapp.com/FbWYnmJT/img/5014e5a26a574b1a9a32e6d7ccfe8ab106e0c989dfca6aac1c469debbc772730@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-2">
                <div className="text-wrapper">Tether</div>
                <FetchCoinPrice coin="KRW-USDT" />

                <div className="text-wrapper-3">USDT</div>
                <div className="text-wrapper-15"></div>
                <img
                  className="img"
                  alt="Img"
                  src="https://c.animaapp.com/FbWYnmJT/img/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="group-6">
              <img className="vector-3" alt="Vector" src="https://c.animaapp.com/FbWYnmJT/img/vector-5.svg" />
              <div className="text-wrapper-16">Home</div>
            </div>
            <div className="group-7">
              <img className="vector-4" alt="Vector" src="https://c.animaapp.com/FbWYnmJT/img/vector-6.svg" />
              <div className="text-wrapper-17">Portfolio</div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-18">Trade</div>
            </div>
            <div className="group-9">
              <img className="vector-5" alt="Vector" src="https://c.animaapp.com/FbWYnmJT/img/vector-7.svg" />
              <div className="text-wrapper-19">Market</div>
            </div>
            <div className="group-10">
              <img className="vector-6" alt="Vector" src="https://c.animaapp.com/FbWYnmJT/img/vector-8.svg" />
              <div className="text-wrapper-20">Profile</div>
            </div>
          </div>
          <img className="trade-icon" alt="Trade icon" src="https://c.animaapp.com/FbWYnmJT/img/trade-icon@2x.png" />
          <SwipeHandle className="swipe-handle-instance" />
        </div>
        <div className="overlap-2">
          <div className="group-11">
            <div className="text-wrapper-21">for you only.</div>
            <p className="market-is-profitable">
              <span className="span">Market is profitable</span>
              <span className="text-wrapper-22"></span>
              <span className="text-wrapper-23"></span>
            </p>
          </div>
          <img className="vector-7" alt="Vector" src="https://c.animaapp.com/FbWYnmJT/img/vector-9.svg" />
        </div>
        <div className="text-wrapper-24">Coins </div>

        <div className="vector-wrapper">
          <img className="vector-8" alt="Vector" src="https://c.animaapp.com/FbWYnmJT/img/vector-10.svg" />
        </div>
      </div>
    </div>
  );
};
