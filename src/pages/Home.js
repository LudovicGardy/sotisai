import React from "react";

import "../App.css";
import Footer from "../components/Footer";

import Parallax from "./Home/Parallax";
import Introduction from "./Home/Introduction";
import HeroSection from "./Home/Hero_Section";
import Cards from "./Home/Cards";
import Partners from "./Home/Partners";

function Home() {

  console.log("lolzz")
  return (
    <>
      <HeroSection />
      <Introduction />
      <Cards />
      <Parallax />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
