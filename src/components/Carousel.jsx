import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/1003/200/150",
    "https://picsum.photos/id/1003/200/150",
    "https://picsum.photos/id/1003/200/150",
    "https://picsum.photos/id/1004/200/150",
    "https://picsum.photos/id/1011/200/150",
    "https://picsum.photos/id/1015/200/150",
    "https://picsum.photos/id/1024/200/150",
    "https://picsum.photos/id/1036/200/150",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 10000,
    autoplayInterval: 500,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            className={slideIndex === index ? "slide activeSlide" : "slide"}
            key={index}
          >
            <img
              src={image}
              alt={`slide ${index}`}
              // style={slideIndex === index ? { width: '300px', height: '200px' } : {}}
            />
          </div>
        ))}
      </Slider>
      <div className="shine" />
    </div>
  );
};

export default Carousel;
