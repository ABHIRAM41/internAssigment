import React from "react"
import logo from '../images/logo.png'
import pizza from '../images/pizza.png'
import sidep from '../images/sidep.png'
const First=()=>{

    return(
        <div className="row sidep">
            <div className="col d-flex flex-column justify-content-center align-items-start ">
                <div className="">
                    <img src={logo} alt="logo" className="s"/>
                </div>
                <div className="my-5 s1">
                    <h1 className="fh1">Discover the <span>Best</span> Food and Drinks</h1>
                    <p className="fp">Naturally made Healthcare Products for the better care & support of your body.</p>
                    <button className="btn btn-danger button" style={{padding:'10px 5px'}}>Explore more</button>
                </div>
                
            </div>
            <div className="col">
            <div className=" sidep1">
                <img src={pizza} alt="" />
                </div>
                <div className="sidep1">
                <img src={sidep} alt="sidep"/>
            </div>
            </div>
        </div>
    );
}

export default First