import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.css";

export const SliderCar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={style["slider-container"]}>
      <Slider {...settings}>
        <div>
          <img src="/assets/images/slider/slide_1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/assets/images/slider/slide_2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/assets/images/slider/slide_3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};
