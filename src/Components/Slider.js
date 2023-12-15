import React from "react";

export const Slider = () => {
  return (
    <div className="slider-wrapper theme-default">
      <div id="slider" className="nivoSlider">
        <img
          src="%PUBLIC_URL%/assests/images/slider/slide_1.jpg"
          title="#htmlcaption1"
          data-thumb="%PUBLIC_URL%/assests/images/slider/slide_1.jpg"
          alt=""
        />
        <img
          src="%PUBLIC_URL%/assests/images/slider/slide_2.jpg"
          title="#htmlcaption2"
          data-thumb="%PUBLIC_URL%/assests/images/slider/slide_2.jpg"
          alt=""
        />
        <img
          src="%PUBLIC_URL%/assests/images/slider/slide_3.jpg"
          title="#htmlcaption3"
          data-thumb="%PUBLIC_URL%/assests/images/slider/slide_3.jpg"
          alt=""
        />
      </div>
      <div id="htmlcaption1" className="nivo-caption">
        <div className="nivo-caption__inner">
          <div className="text">
            <h1 className="showtext showtext__h1">
              Trusted <br />
              by 5 Million
              <br />
              Customers
              <br /> &amp; Counting
            </h1>
            <span className="showtext showtext__link">
              <a href="#">Start your travel planning here!</a>
            </span>
          </div>
        </div>
      </div>
      <div id="htmlcaption2" className="nivo-caption">
        <div className="nivo-caption__inner left-side">
          <div className="text">
            <h1 className="showtext showtext__h1">
              Treat Yourself:
              <br /> Book a Luxury
              <br /> Car Rental
            </h1>
            <span className="showtext showtext__link">
              <a href="#">Luxury Car Rental &amp; Chauffeured Cars</a>
            </span>
          </div>
        </div>
      </div>
      <div id="htmlcaption3" className="nivo-caption">
        <div className="nivo-caption__inner left-side">
          <div className="text">
            <h1 className="showtext showtext__h1">
              Treat Yourself:
              <br /> Book a Luxury
              <br /> Car Rental
            </h1>
            <span className="showtext showtext__link">
              <a href="#">
                Luxury Car Rental <br />& Chauffeured Cars
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
