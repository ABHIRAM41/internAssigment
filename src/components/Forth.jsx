import React from "react";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.png"
const Forth=()=>{
return (
    <div className="foot">
    <div className="container">
        <div className="row fcontainer">
            <div className="col-12 col-lg-3  flogo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="col-12 col-lg-3  fcontact">
                <h4>
                    Contact Us
                </h4>
                <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p>example2020@gmail.com</p>
                <p>(904) 443-0343</p>
            </div>
            <div className="col-12 col-lg-3  fmore">
            <div className="">
                <h4>
                    More
                </h4>
                <p>About Us</p>
                <p>Products</p>
                <p>Career</p>
                <p>Contact Us</p>
            </div>
            </div>
            <div className="col-12 col-lg-3  fmore">
                <div className="fsocialall">
                    <div className="fsocial ">
                        <h4 >Social media</h4>
                        <div >
                            <img src={insta} alt="insta"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={facebook} alt="facebook"/>
                        </div>
                    </div>
                </div>
                <div>
                © 2022 Food Truck Example
                </div>
            </div>
        </div>
    </div>
    </div>
)
}
export default Forth;