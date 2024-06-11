import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Slider = ({sliderItems,SliderCard,button}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="sliderContainer flex">
      <div
        className="arrow flex center"
        onClick={() => handleClick("left")}
      >
        <FaArrowLeft />
      </div>
      <div
        className="flex"
        style={{
          height: "100%",
          transform: `translateX(${slideIndex * -25}vw)`,
          transition: "all 1.5s ease",
          margin: "0 2px",
        }}
      >
        {sliderItems.map((item, id) => {
          return (
            <SliderCard item={item} id={id} button={button}/>
          );
        })}
      </div>
      <div
        className="arrow aright flex center"
        onClick={() => handleClick("right")}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Slider;
