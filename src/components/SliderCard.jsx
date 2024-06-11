import React from "react";

const SliderCard = ({ item, id, button}) => {
  return (
    <div key={id} className="slide flex-col">
      <div className="imgContainer">
        <img src={item.img ? item.img : ""} alt="" />
      </div>
      <div className="slideInfo flex-col">
        <h3>{item.title ? item.title : ""}</h3>
        <div className="slideContent flex">
          <p>{item.desc ? item.desc : ""}</p>
          {button ? <button className="btn">Get Free Quote</button> : null}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
