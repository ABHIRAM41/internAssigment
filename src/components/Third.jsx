import React, { useState } from "react";
import dish1 from "../images/dish1.png";
import dish2 from "../images/dish2.png";
import dish3 from "../images/dish3.png";
import dish4 from "../images/dish4.png";
import dish5 from "../images/dish5.png";
import dish6 from "../images/dish6.png";

import ll from "../images/ll.png";
import ld from "../images/ld.png";
import rl from "../images/rl.png";
import rd from "../images/rd.png";

import Cards from "./Cards";

const Third = () => {
  const [num, setNum] = useState(0);
  const [n, setN] = useState(0);

  const cardDetails = [
    {
      img: dish1,
      title: "Grilled  Tomatoes at Home",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: dish2,
      title: "Snacks for Travel",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: dish3,
      title: "Post-workout Recipes",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: dish4,
      title: "How To Grill Corn",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: dish5,
      title: "Crunchwrap Supreme",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: dish6,
      title: "Broccoli Cheese Soup",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  return (
    <div className="container">
      <h1 className="Thirdcontainer">Latest Articles</h1>
      <div className="row  g-4">
        <div className="col ">
          <Cards card={cardDetails[0 + n]} />
        </div>
        <div className="col  ">
          <Cards card={cardDetails[1 + n]} />
        </div>
        <div className="col ">
          <Cards card={cardDetails[2 + n]} />
        </div>
      </div>
      <div className="arrowb">
        <div className=""><button className='butto' onClick={()=>{setNum(num==0?1:0); setN(n==0?3:0) }}>{num == 0 ? <img src={ll} /> : <img src={ld} />}</button></div>
        <div className="">{num + 1}/2</div>
        <div className=""><button className='butto' onClick={()=>{setNum(num==1?0:1); setN(n==0?3:0) }}>{num == 1 ? <img src={rl} /> : <img src={rd} />}</button></div>
      </div>
    </div>
  );
};
export default Third;
