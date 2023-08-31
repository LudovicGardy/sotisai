import React from "react";

import "../App.css";
import Footer from "../components/Footer/Footer";

import Parallax from "./Home/Parallax_section";
import Introduction from "./Home/Introduction_section";
import HeroSection from "./Home/Heroo_section";
import Cards from "./Home/Cards_section";
import Partners from "./Home/Scrolling_banner_section";

function Home() {

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
