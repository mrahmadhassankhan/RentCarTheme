import React from "react";

export const Loader = () => {
  // This event is triggered when the entire page has finished loading
  window.onload = () => {
    // Hide the loader or perform any other actions
    document.querySelector(".plash").style.display = "none";
  };

  return (
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
  );
};
