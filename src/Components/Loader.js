import React from "react";

export const Loader = () => {
  const LoaderHide = () => {
    setTimeout(() => {
      document.querySelector(".plash").style.display = "none";
    }, 500);
  };
  return (
    <div className="plash" onLoad={LoaderHide()}>
      <div id="scene">
        <span></span>
        <div id="road">
          <div id="stripes"></div>
        </div>
      </div>
      <div className="loading">
        Loading<span>...</span>
      </div>
    </div>
  );
};
