import React from "react";
import Footer from "../../components/Footer";
import Dashboards_images from "./Dashboards_images";
import Partners from "../Home/Partners";
import { Button } from "../../components/Button";

import "../../App.css";
import "./Data_workflow.css";

function Data_workflow() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className="services-diagram">

        {/* <h3>Workflow might vary</h3> */}

        <div className="services-diagram-title1">
            <h4>Do you start with ideas?</h4>
        </div>

        <div className="services-diagram-first">

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/idea.jpg"></img>
                <p>IDEAS</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/data_collection.jpg"></img>
                <p>DATA COLLECTION</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/data_cleaning.jpg"></img>
                <p>DATA CLEANING</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/database.jpg"></img>
                <p>DATABASE</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/visualization.jpg"></img>
                <p>VISUALIZATION</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/analyses.jpg"></img>
                <p>PREDICTIONS</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/insight.jpg"></img>
                <p>INSIGHTS</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/action.jpg"></img>
                <p>ACTION</p>
            </div>

        </div>

        <div className="services-diagram-title2">
            <h4>Or do you start with data?</h4>
        </div>

        <div className="services-diagram-second">

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/data_collection.jpg"></img>
                <p>DATA COLLECTION</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/data_cleaning.jpg"></img>
                <p>DATA CLEANING</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/database.jpg"></img>
                <p>DATABASE</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/idea.jpg"></img>
                <p>IDEAS</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/visualization.jpg"></img>
                <p>VISUALIZATION</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/analyses.jpg"></img>
                <p>PREDICTIONS</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/insight.jpg"></img>
                <p>INSIGHTS</p>
            </div>

            <div className="services-diagram-canvas">
                <img src="/images/LG_services/data_science/diagram/action.jpg"></img>
                <p>ACTION</p>
            </div>

        </div>

        {/* <div className="datascience_button_wrapper">
            <div className="hero-btns">
                <Button
                className="btns"
                buttonStyle="btn--secondary"
                buttonSize="btn--large2"
                redirection="/contact"
                >
                CONTACT
                </Button>
            </div>
        </div> */}
    </div>
    </>
  );
}

export default Data_workflow;
