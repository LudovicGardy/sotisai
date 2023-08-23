import React, { useState } from "react";
import "./Legal_Information.css";
import Footer from "./Footer";


function CookiesPolicy() {
  return (
    <>
    <div className="legal_main">

      <div className="legal_container">

        <h2>Cookies policy</h2>

        <h3>1. Introduction</h3>
        <p>When you visit our site, cookies are used to enhance your user experience and allow us to analyze how our site is utilized. By continuing to browse our site, you implicitly agree to our use of these cookies.</p>

        <h3>2. What is a cookie?</h3>
        <p>A cookie is a small text file that is downloaded to your computer or mobile device when you visit a website. These cookies enable the site to remember certain information, such as your preferences or whether you're logged in.</p>

        <h3>3. How do we use cookies?</h3>
        <p>We use cookies to:</p>
        <ul>
            <li>Ensure the proper functioning of our site.</li>
            <li>Remember your preferences and settings.</li>
            <li>Analyze the traffic and performance of our site to enable us to enhance our services.</li>
        </ul>

        <h3>4. What types of cookies do we use?</h3>
        <p>There are several types of cookies, including:</p>
        <ul>
            <li><strong>Session cookies</strong>: These cookies are temporary and are deleted when you close your browser.</li>
            <li><strong>Persistent cookies</strong>: These cookies remain on your device until they expire or until you delete them.</li>
            <li><strong>Third-party cookies</strong>: These cookies are set by third parties, for example, Google Analytics, to track site performance.</li>
        </ul>

        <h3>5. How to control cookies?</h3>
        <p>Most web browsers allow you to control cookies through their settings. However, if you decline cookies, you might not be able to use certain features of our site.</p>

        <h3>6. Changes to this policy</h3>
        <p>We reserve the right to modify this cookie policy at any time. All changes will take effect immediately upon their posting on the site.</p>

        <h3>7. Contact us</h3>
        <p>If you have any questions regarding our use of cookies, please don't hesitate to contact us.</p>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default CookiesPolicy;