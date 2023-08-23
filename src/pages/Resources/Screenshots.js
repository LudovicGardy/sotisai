import React, { useState } from 'react';
import { Fade, LightSpeed, Zoom } from 'react-reveal';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Screenshots.css';

const images = [
  './images/LG_screenshots/jpg/screen1.jpg',
  './images/LG_screenshots/jpg/screen2.jpg',
  './images/LG_screenshots/jpg/screen3.jpg',
  './images/LG_screenshots/jpg/screen4.jpg',
  './images/LG_screenshots/jpg/screen5.jpg',
  './images/LG_screenshots/jpg/screen6.jpg',
  './images/LG_screenshots/jpg/screen7.jpg',
  './images/LG_screenshots/jpg/screen8.jpg',
  './images/LG_screenshots/jpg/screen9.jpg',
  './images/LG_screenshots/jpg/screen10.jpg',
  './images/LG_screenshots/jpg/screen11.jpg',
  './images/LG_screenshots/jpg/screen12.jpg',
  './images/LG_screenshots/jpg/screen13.jpg',
  './images/LG_screenshots/jpg/screen14.jpg',
];

const links = [
    'https://www.google.com',
    'https://www.youtube.com',
    'https://www.facebook.com',
  ];
  

function ScreenshotsArea() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    function handlePrevious() {
      setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };
  
    function handleNext() {
      setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    };
  
    function handleClick() {
        window.open(links[currentImageIndex], '_blank');
    }

    return (
        <div className="screenshots_container">
            <div className="screenshots_wrapper">
              <Fade duration={2000}>
              <div className="horizontal_box_screenshots">
                  <div className="left_box_screenshots">
                      <div className="carousel">
                          <img src={images[currentImageIndex]} alt="carousel" />
                          <div className="arrow arrow-left" onClick={handlePrevious}><i className="fas fa-arrow-left"></i></div>
                          <div className="arrow arrow-right" onClick={handleNext}><i className="fas fa-arrow-right"></i></div>
                          {/* <div className="arrow arrow-left" onClick={handlePrevious}><i><FontAwesomeIcon icon={faArrowCircleLeft} /></i></div>
                          <div className="arrow arrow-right" onClick={handleNext}><i><FontAwesomeIcon icon={faArrowCircleRight} /></i></div> */}
                      </div>
                        <p className="Halyzia_description">Halyzia&#169; exemplifies my creative and comprehensive approach to project development. 
                        I created this complete solution for processing EEG (brain activity) data to assist in diagnosing drug-resistant epilepsy. 
                        My involvement spanned from conceptualization and design to development, project management, 
                        documentation writing, user training, and technical support. Now operated by a French 
                        startup, <a href="https://avriomedtech.com/">Avrio MedTech&#169;</a>, it serves both research and clinical concerns.
                        Most of my projects involve varying degrees of software development, with tools and design methods 
                        tailored to specific requirements such as users, deployment, maintenance, etc.
                        </p>
                  </div>
              </div>
              </Fade>
            </div>
            
      </div>
    );
  }
  
  export default ScreenshotsArea;


  