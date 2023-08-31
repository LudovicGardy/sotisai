import {React, useContext, useEffect } from "react";

import "../App.css";
import Footer from "../components/Footer/Footer";

import About_Page from "./About/History/History_page";
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

