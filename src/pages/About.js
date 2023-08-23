import {React, useContext, useEffect } from "react";

import "../App.css";
import Footer from "../components/Footer";

import About_Page from "./About/About_page";
import ReactGA from "react-ga"


function About() {

  useEffect(() => {
    // non interaction event
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <About_Page/>
      <Footer/>
    </>
  );
}

export default About;

