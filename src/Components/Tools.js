import React from "react";

export const Tools = () => {
  return (
    <>
      <div className="tools">
        <span className="toggle">
          <img
            src="%PUBLIC_URL%/assets/images/color-icon.png"
            className="img-responsive"
            alt=""
          />
        </span>
        <a href="#" className="color-blue">
          Blue
        </a>
        <a href="#" className="color-yellow">
          Yellow
        </a>
        <a href="#" className="color-turquoise">
          Turquoise
        </a>
        <a href="#" className="color-orange">
          Orange
        </a>
        <a href="#" className="color-orange-sec">
          Orange-second
        </a>
        <a href="#" className="color-lightblue">
          Lightblue
        </a>
        <a href="#" className="color-pink">
          Pink
        </a>
      </div>
    </>
  );
};
