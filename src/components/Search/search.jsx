import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Menu = ({
    vector = "vector.svg",
    divClassName,
    img = "image.svg",
    divClassNameOverride,
    vector1 = "vector-2.svg",
    divClassName1,
    text = "Rewards",
    vector2 = "vector-3.svg",
    divClassName2,
    vector3 = "vector-4.svg",
    divClassName3,
}) => {
    return (
        <div className="menu">
            <div className="group">
                <img className="vector" alt="Vector" src={vector} />
                <div className={`text-wrapper ${divClassName}`}>Home</div>
            </div>
            <div className="div">
                <img className="img" alt="Vector" src={img} />
                <div className={`text-wrapper-2 ${divClassNameOverride}`}>Portfolio</div>
            </div>
            <div className="group-2">
                <img className="vector-2" alt="Vector" src={vector1} />
                <div className={`text-wrapper-2 ${divClassName1}`}>{text}</div>
            </div>
            <div className="group-3">
                <img className="vector-3" alt="Vector" src={vector2} />
                <div className={`text-wrapper-3 ${divClassName2}`}>Market</div>
            </div>
            <div className="group-4">
                <img className="vector-4" alt="Vector" src={vector3} />
                <div className={`text-wrapper-4 ${divClassName3}`}>Profile</div>
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
