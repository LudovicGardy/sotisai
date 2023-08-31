import React from "react";

import "../App.css";
import Footer from "../components/Footer/Footer";
import Contact_Banner from "./Contacts/Contacts_banner";

import Contact_Field from "./Contacts/Contacts_field";
import GoogleApiWrapper from "./Contacts/Google_maps";
import ContactInfo from "./Contacts/Contacts_info";
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
