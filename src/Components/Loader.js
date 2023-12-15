import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="plash">
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
    </>
  );
};
