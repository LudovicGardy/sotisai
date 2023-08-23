import React from "react";

import "../App.css";
import Footer from "../components/Footer";
import Contact_Banner from "./Contact/Contact_Banner";

import Contact_Field from "./Contact/Contact_Field";
import GoogleApiWrapper from "./Contact/Google_maps";
import ContactInfo from "./Contact/Contact_info";
// import Contact_Schedule from "./Contact/Contact_Schedule";


function Contact() {
  return (
    <>
        <Contact_Banner/>
        {/* <Contact_Schedule/> */}
        <Contact_Field/>
        {/* <ContactInfo/> */}
        <GoogleApiWrapper/>
        <Footer/>
    </>
  );
}

export default Contact;
