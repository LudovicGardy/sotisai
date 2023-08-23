import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactCookieConsent from "react-cookie-consent";

import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import CookiesPolicy from './components/Cookies_Policy';


import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import DataScience from './pages/Resources/Data_Science';
import SignalProcessing from './pages/Resources/Signal_Processing';
import FullstackDev from './pages/Resources/Fullstack_Dev';
import Dashboards from './pages/Resources/Dashboards';
import Testimonials from './pages/About/Testimonials';
import Legal_Information from './components/Legal_Information';
import Trust_And_Security from './components/Trust_And_Security';
import Error_Page from './components/Error_Page';
import tests from './pages/Tests/tests';
import { InlineWidget, PopupWidget } from "react-calendly";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // set the time for the preloader to appear before the content is displayed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? ( // display the preloader if loading is true
        <div className="preloader">
            {/* <img src="./../images/gif/loader/loading.GIF" alt="Loading..." /> */}
            <img src="https://elasticbeanstalk-eu-north-1-643287291923.s3.eu-north-1.amazonaws.com/loader_square.gif" alt="Loading..." />
        </div>
      ) : (
        <Router>
          <ReactCookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="Sotis_Cookie" // Nom du cookie
            style={{ background: "#2B373B" }}
            expires={150} // Le cookie expirera après 150 jours
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}

          //   enableDeclineButton
          //   declineButtonText="Refuse"
          //   declineButtonStyle={{ background: "#c44d58", fontSize: "13px" }}
          //   onDecline={() => {
          //     window.location.href = '/tests';
          // }}
          >
            We use cookies to improve your experience. By continuing to use this site, you agree to our cookies policy.
          </ReactCookieConsent>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/data-science" component={DataScience} />
            <Route path="/signal-processing" component={SignalProcessing} />
            <Route path="/development" component={FullstackDev} />
            <Route path="/dashboards" component={Dashboards} />
            <Route path="/about" component={About} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/legal-information" component={Legal_Information} />
            <Route path="/trust-and-security" component={Trust_And_Security} />
            <Route path="/cookies-policy" component={CookiesPolicy} />
            <Route path="/tests" component={tests} />
            <Route path="*" component={Error_Page} />
          </Switch>
        </Router>
      )}
    </>
  );
}


export default App;
