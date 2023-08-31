import React, { useState } from 'react';
import { Fade, LightSpeed, Zoom } from 'react-reveal';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Screenshots.css';


function ScreenshotsArea2() {
 
    return (
        <div className="screenshots_gif_container">
            <div className="screenshots_gif_wrapper">
              <Fade duration={2000}>
                  <div className="left_box_gif_screenshots">
                    <div className="screenshots_gif_text_container">
                        <h4>
                        As you navigate through this website, you are experiencing a technology blend designed 
                        for simplicity and effectiveness. The frontend, crafted with React, provides a clean 
                        and intuitive user interface. The backend, powered by Python, handles databases to 
                        bring you dynamic content. Of course, this technology stack has the potential to 
                        manage far more complex tasks and workflows.
                        </h4>
                      </div>
                  </div>
              </Fade>
            </div>
            
      </div>
    );
  }
  
  export default ScreenshotsArea2;
