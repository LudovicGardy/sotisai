import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import ScreenshotsArea1 from "./Screenshots1";
import ScreenshotsArea2 from "./Screenshots2";
import ScreenshotsArea3 from "./Screenshots3";
import Dev_squares from "./Dev_squares";
import Dev_types from "./Dev_types";
import Partners from "../../Home/Scrolling_banner_section";

import "../../../App.css";
import "../Portfolio.css";

function Fullstack_Dev() {
  const [currentArea, setCurrentArea] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderScreenshotsArea = () => {
    console.log(currentArea);
    switch (currentArea) {
      case 0:
        return <ScreenshotsArea1 />;
      case 1:
        return <ScreenshotsArea2 />;
      case 2:
        return <ScreenshotsArea3 />;
    }
  };

  return (
    <>
      <div className="services-container">
        <div className="services-banner">
          <img src="/images/LG_banners/fullstack_dev/format_L.jpg"></img>
          <h1 className="banners-title">DEVELOPMENT</h1>
        </div>

        {/* <div className="services-quote-text">
          <figure className="services-figure">
            <blockquote className="blockquote text-italic">
              <p>
                Computer programming is an art, because it applies accumulated
                knowledge to the world, because it requires skill and ingenuity,
                and especially because it produces objects of beauty. A
                programmer who subconsciously views himself as an artist will
                enjoy what he does and will do it better.
              </p>
              <figcaption className="figcaption">
                <span>Donald Knuth</span>
              </figcaption>
            </blockquote>
          </figure>
        </div> */}

        <div className="services-transition">
          <p>
          In the ever-evolving landscape of technology, choosing the right stack for your project is a strategic decision. 
          The frameworks and languages presented in the boxes below are versatile options that can cater to a wide range of needs, 
          whether you're operating on a small or large scale, with abundant or limited resources, and time constraints.
          </p>

          <p>
          These stacks are by no means exhaustive but cover the majority of use-cases you're likely to encounter. 
          They offer a balanced mix of speed, scalability, and ease of deployment among other factors. 
          While I've highlighted key performance indicators for each, it's worth noting that there are other combinations 
          and technical aspects that can be tailored to your specific needs.
          </p>

          <p>
          Feel free to explore the ratings in the boxes below and hover over each point for more context. 
          This section aims to provide a concise, actionable overview to guide your decision-making process.
          </p>
        </div>

        <div className="services-start" style={{paddingLeft: '0px', paddingTop: '0px', width:'95%'}}>
          <h3>Select a technology to explore sample projects</h3>
        </div>

        <Dev_types setScreenshotsArea={setCurrentArea} />

        {renderScreenshotsArea()}

      </div>

      <Dev_squares />
      <Partners />
      <Footer />
    </>
  );
}

export default Fullstack_Dev;
