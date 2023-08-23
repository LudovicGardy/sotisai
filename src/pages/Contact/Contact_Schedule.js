import React, { useState } from "react";
import "./Contact_Field.css";
import { InlineWidget } from "react-calendly";


const FORM_ENDPOINT = "https://formspree.io/f/xzbqkody"; // Formspree is a javascript compatible mail sender

const Contact_Schedule = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
       <div className="thankyou_container">
        <p>Thank you! We will get in touch soon.</p>
       </div>
      </>
    );
  }

  return (

    <div className="contact_main">

      <div className="contact_container">

        <h2>Schedule a meeting !</h2>

        <p className="calendar_intro">Would you like more information, or do you have a project you think we could work on together and would like to evaluate? 
          Book an appointment on the calendar. You will receive a Zoom invitation to discuss your project - it's free!</p>

          <div className="calendar_wrapper">
          <InlineWidget
          url="https://calendly.com/ludovic-gardy/30min"
          styles={{ height: "100%", width: "100%" }}
          prefill={{
            email: 'test@test.com',
            firstName: 'Jon',
            lastName: 'Snow',
            name: 'Jon Snow',
            guests: [
              'janedoe@example.com',
            ],
            customAnswers: {
              a1: 'a1',
              a2: 'a2',
              a3: 'a3',
              a4: 'a4',
              a5: 'a5'
            },
            date: new Date(Date.now() + 86400000)
          }}

          utm={{
            utmCampaign: 'Spring Sale 2019',
            utmContent: 'Shoe and Shirts',
            utmMedium: 'Ad',
            utmSource: 'Facebook',
            utmTerm: 'Spring'
          }}
        />;         

          </div>

        </div>

      </div>

  );
};

export default Contact_Schedule;