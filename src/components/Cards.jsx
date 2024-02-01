import React from "react";
import dish3 from "../images/dish3.png";
const Cards = ({card}) => {
  return (
    <div className="cards">
      <div>
        <img src={card.img} />
      </div>
      <div className="cardcontent">
        <h4 >{card.title}</h4>
        <p>
        {card.content}
        </p>
        <button className="btn buttonr" >Read More</button>
      </div>
    </div>
  );
};
export default Cards;
