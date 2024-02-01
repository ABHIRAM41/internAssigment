import React from "react"
import logo from '../images/logo.png'
import pizza from '../images/pizza.png'
import sidep from '../images/sidep.png'
const First=()=>{

    return(
        <section class="top">
      <div class="container-fluid">
        <div
          class="row justify-content-center align-items-center position-relative"
        >
          <div><img
            class="logo"
            src={logo}
          /></div>
          <div class="order-2 order-lg-1 col-12 col-lg-6">
            <div class="d-flex flex-column justify-content-center vh-100">
              <div class="ms-5">
                <p class="hero-text">
                  Discover the <br />Best Food <br />
                  and Drinks
                </p>
                <p class="hero-secondary">
                  Naturally made Healthcare Products for the <br />
                  better care & support of your body.
                </p>
                <div class="">
                  <button class="explore-btn btn btn-lg text-white">
                    Explore Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 order-lg-2 col-12 col-lg-6">
            <div class="position-relative">
              <img class="hero-img" src={pizza} alt="" />
              <img
                class="hero-vector position-absolute"
                src={sidep}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
        </section>
    );
}

export default First;
{/* <div className="row sidep">
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
        </div> */}