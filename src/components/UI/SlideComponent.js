import React from "react";
import Slider from "react-slick";
import './SlideComponent.css'

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
    dotsClass:'slick-dots'
    
  };

  return (
    <Slider {...settings}>
      {arrImages.map((element) => {
        return <img src={element} alt="" preview={false} width="100%" height="705px" />;
      })}
    </Slider>
  );
};

export default SliderComponent;
