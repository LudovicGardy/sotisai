import React from "react";
import Footer from "../../components/Footer";
import ScreenshotsArea from "./Screenshots";
import Dev_squares from "./Dev_squares";
import Partners from "../Home/Partners";

import "../../App.css";
import "./Services.css";

function Fullstack_Dev() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className="services-container">

        <div className="services-banner">
            <img src="/images/LG_banners/fullstack_dev/format_L.jpg"></img>
            <h1 className= "banners-title">DEVELOPMENT</h1>
        </div>

        <div className="services-quote-text">
                <figure className="services-figure">
                    <blockquote className="blockquote text-italic">
                      <p>Computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, 
                        and especially because it produces objects of beauty. A programmer who subconsciously views himself as an artist will enjoy 
                        what he does and will do it better.</p>
                        <figcaption className="figcaption">
                          <span>Donald Knuth</span>
                      </figcaption>
                    </blockquote>
                </figure>
          </div>

        <div className="services-transition">
          <p>Doing data science, signal processing or modeling means knowing the theoretical, mathematical and physical concepts 
            underlying these disciplines. But it also knowing how to put them into practice, implement them, 
            code them, test them, debug them, optimize them, deploy them, maintain them, document them, improve them and make them evolve.  
            It is these aspects that I have developed over the course of my career, raising my awareness of product design, database 
            management, API development, human-machine interfaces, deployment, maintenance and support. 
          </p>
        </div>

        <ScreenshotsArea/>




      {/* <div className="services-ending">
        <h4>And many more.</h4>
      </div> */}

    </div>

    <Dev_squares/>
    <Partners/>
    <Footer/>

    </>
  );
}

export default Fullstack_Dev;
