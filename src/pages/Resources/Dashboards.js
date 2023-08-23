import React from "react";
import Footer from "../../components/Footer";
import Dashboards_images from "./Dashboards_images";
import Data_workflow from "./Data_workflow";
import Partners from "../Home/Partners";
import { Button } from "../../components/Button";

import "../../App.css";
import "./Services.css";

function Dashboards() {

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

        <div className="services-banner" >
            <img src="/images/LG_banners/dashboards/format_L.jpg"></img>
            <h1 className= "banners-title">DASHBOARDS</h1>
        </div>

        <div className="services-transition" style={{padding:'0px', paddingTop:'80px', width:'90%'}}>
          <p style={{width: '100%',alignSelf:'center'}}>
          My practice of datascience has brought me into contact with all the elements that make up a data project, 
          from concept definition to implementation, including database management and dashboard creation. 
          Although I specialize in machine learning, the conception, training and testing of models, as well as the 
          definition of fundamental theoretical notions and the design of methods, I enjoy being involved in the 
          various stages of projects. I like to understand the essence, the stakes and the objectives, so that I 
          can be impactful in my analyses and proposals.
          </p>
          
        </div>

        <div className="services-start" style={{paddingLeft: '0px', paddingTop: '0px', width:'90%'}}>
          <h3>Workflow might vary</h3>
        </div>

        <Data_workflow/>

        <div className="services-start" style={{paddingLeft: '0px', paddingTop: '0px', width:'90%'}}>
          <h3>Examples of publicly shareable dashboards I had the opportunity to deliver</h3>
        </div>

        <Dashboards_images/>

        {/* <div className="services-transition">
        </div> */}


      {/* <div className="services-ending">
        <h4>And many more.</h4>
      </div> */}

    </div>

    <Partners/>
    <Footer/>

    </>
  );
}

export default Dashboards;
