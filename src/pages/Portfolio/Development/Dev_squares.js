import React, { useState } from 'react';
import { Fade, LightSpeed, Zoom } from 'react-reveal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import './Dev_squares.css';


function Dev_squares() {

    return (
        <Fade duration={2000}>

        <div className="devsquares_container">

            <h2>Quality and Warranties</h2>

            <div className="devsquares_wrapper">
                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Performance</h4>
                    <p>Evaluates how quickly and efficiently the application processes tasks. Critical for real-time analytics, data processing, and user experience. A high-performance system can save both time and resources.</p>
                    <a><span>Sample tools:</span> PsSpy, New Relic, Lighthouse.</a>
                </div>

                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Flexibility</h4>
                    <p>Measures the system's adaptability to new requirements or changes. Whether it's adding new features, integrating with third-party services, or modifying existing functionalities, flexibility is key.</p>
                    <a><span>Sample tools:</span> Docker, Kubernetes, API Gateway.</a>
                </div>
            </div>

            <div className="devsquares_wrapper">
                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Scalability</h4>
                    <p>Assesses the application's ability to handle increased user loads or data volume. Essential for projects that anticipate growth, either in user numbers or in data complexity.</p>
                    <a><span>Sample tools:</span> AWS Auto Scaling, Kubernetes, Google Cloud Run.</a>
                </div>

                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Security</h4>
                    <p>Rates the robustness against unauthorized access, data breaches, and other vulnerabilities. Especially crucial for applications that handle sensitive or confidential information.</p>
                    <a><span>Sample tools:</span> OWASP ZAP, Qualys, Keycloak.</a>
                </div>
            </div>

            <div className="devsquares_wrapper">
                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Implementation</h4>
                    <p>Gauges the ease and speed of the initial setup process, from coding to launching the application. A smooth implementation process can significantly reduce the time-to-market.</p>
                    <a><span>CI/CD:</span> Git, Docker, Jenkins.</a>
                </div>

                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Local Deployment</h4>
                    <p>Measures the ease of setting up the application in a local environment. This is often the first step before scaling to a more complex cloud-based system and is crucial for initial testing.</p>
                    <a><span>Sample tools:</span> Vagrant, Docker Compose, Kubernetes Minikube.</a>
                </div>
            </div>

            <div className="devsquares_wrapper">
                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Web Deployment</h4>
                    <p>Evaluates how straightforward it is to deploy the application on the web. Important for Software as a Service (SaaS) models, e-commerce platforms, and any application requiring remote access.</p>
                    <a><span>Sample tools:</span> OVH, Heroku, AWS Elastic Beanstalk.</a>
                </div>

                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Distant Databases</h4>
                    <p>Assesses the ease of connecting to and interacting with remote databases. Important for applications that rely on distributed data storage or cloud-based data solutions.</p>
                    <a><span>Sample tools:</span> Amazon RDS, MongoDB Atlas, Google Cloud SQL.</a>
                </div>
            </div>  
        </div>

      </Fade>

    );
  }
  
  export default Dev_squares;


  