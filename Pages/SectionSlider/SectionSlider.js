import React from "react";

import "./SectionSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import imag1 from "../../Assets/one.jpg";
import imag2 from "../../Assets/two.jpg";
import imag3 from "../../Assets/three.jpg";
import imag4 from "../../Assets/four.jpg";
import imag5 from "../../Assets/five.jpeg";
// import imag6 from "../../Assets/six.jpeg";

const SectionSlider = () => {
  const images = [imag1, imag2, imag3, imag4, imag5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="image_sliding">
        <Slider {...settings}>
          {images.map((i) => {
            return (
              <div key={i}>
                <img src={i} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SectionSlider;
