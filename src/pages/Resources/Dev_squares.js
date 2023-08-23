import React, { useState } from 'react';
import { Fade, LightSpeed, Zoom } from 'react-reveal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import './Dev_squares.css';


function Dev_squares() {

    return (
        <Fade duration={2000}>

        <div className="devsquares_container">

            <h2>Quality and warranties</h2>

            <div className="devsquares_wrapper">
                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Performances</h4>
                    <p>Performance optimization in application development ensures rapid data analysis and accurate results. This enables you to make informed decisions more quickly and optimize operational efficiency.</p>
                </div>

                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Automation</h4>
                    <p>Automating tasks in the development process saves time and improves overall efficiency. This frees up repetitive tasks, allowing profesionnals to focus on higher value-added tasks.</p>
                </div>
            </div>

            <div className="devsquares_wrapper">
                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Scalability</h4>
                    <p>Scalable solutions are essential to cope with data growth and increasing user numbers. A scalability-focused design ensures that applications remain high-performing and functional, whatever the size of the enterprise.</p>
                </div>

                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Deployment</h4>
                    <p>Effective deployment of models in production enables their full potential to be exploited. By integrating models into applications or creating APIs, analytics can be leveraged to support operations and improve results.</p>
                </div>
            </div>       

            <div className="devsquares_wrapper">
                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Security</h4>
                    <p>Data security is crucial in the development of solutions. A secure approach protects sensitive information from potential threats, providing the peace of mind needed to conduct business or research protocols with confidence.</p>
                </div>

                <div className="devsquares_hbox">
                    <h4> <FontAwesomeIcon icon={faLaptopCode} className="devsquares_icon" /> Version control</h4>
                    <p>The use of version control systems such as Git and GitHub promotes smooth collaboration within teams. This makes it possible to track code modifications, manage versions and ensure complete traceability of data science projects.</p>
                </div>
            </div>  
      </div>
      </Fade>

    );
  }
  
  export default Dev_squares;


  