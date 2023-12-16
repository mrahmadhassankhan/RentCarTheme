import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Example = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slider/slide_1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slider/slide_2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slider/slide_3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
