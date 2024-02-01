import React from "react";
import notadhish from "../images/notadish.png";
const Second = () => {
  return (
    <div className="secondcontent">
    <div  className="container">
    <div className="row">
      <div className="col s1">
      <img src={notadhish} alt="kitchen" />
      </div>
      <div className="scontent s2">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <button className="btn btn-danger button">Read more</button>
      </div>
      </div>
    </div>
    </div>
  );
};
export default Second;
//dish2
