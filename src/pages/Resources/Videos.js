import React, { useState, useRef } from "react";
import { Fade, LightSpeed, Zoom } from 'react-reveal';

import "../../App.css";
import "./Videos.css";

function VideosArea() {
    const [showThumbnail1, setShowThumbnail1] = useState(true);
    const [showThumbnail2, setShowThumbnail2] = useState(true);
    const [showThumbnail3, setShowThumbnail3] = useState(true);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    console.log(videoRef1.current?.paused);

    const handleMouseEnter1 = () => {
      setShowThumbnail1(false);
    };
  
    const handleMouseLeave1 = () => {
      setShowThumbnail1(videoRef1.current?.paused);
    };

    const handleMouseEnter2 = () => {
      setShowThumbnail2(false);
    };
  
    const handleMouseLeave2 = () => {
      setShowThumbnail2(videoRef2.current?.paused);
    };    

    const handleMouseEnter3 = () => {
      setShowThumbnail3(false);
    };
  
    const handleMouseLeave3 = () => {
      setShowThumbnail3(videoRef3.current?.paused);
    };

    return (
        <div className="videos_container">
            <div className="horizontal_box_videos">
              <Fade duration={2000}>
                <div className="video_item">
                    <div className="vertical_box_videos" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <video className="video" controls ref={videoRef1}>
                        <source src="/videos/Halyzia.mp4" type="video/webm" />
                        </video>
                        {showThumbnail1 && 
                        <div className="thumbnail_container">
                            <img className="thumbnail" src="./images/logos/halyzia_logo.jpg" alt="Video Thumbnail" />
                            <p className="thumbnail-text">Halyzia</p>
                        </div>
                        }
                    </div>
                </div>
              </Fade>

              <Fade duration={2000} delay={500}>
                <div className="video_item">
                    <div className="vertical_box_videos" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <video className="video" controls ref={videoRef2}>
                        <source src="/videos/EEG_detection.mp4" type="video/webm" />
                        </video>
                        {showThumbnail2 && 
                        <div className="thumbnail_container">
                            <img className="thumbnail" src="./images/logos/halyzia_logo.jpg" alt="Video Thumbnail" />
                            <p className="thumbnail-text">Detection</p>
                        </div>
                        }
                    </div>
                </div>
              </Fade>

              <Fade duration={2000} delay={1000}>
                <div className="video_item">
                    <div className="vertical_box_videos" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        <video  controls ref={videoRef3}>
                        <source src="/videos/EEG_tagging.mp4" type="video/webm" />
                        </video>
                        {showThumbnail3 && 
                        <div className="thumbnail_container">
                            <img className="thumbnail" src="./images/logos/halyzia_logo.jpg" alt="Video Thumbnail" />
                            <p className="thumbnail-text">Labelling</p>
                        </div>
                        }
                    </div>
                </div>
              </Fade>

            </div>
        </div>
    );
  }

export default VideosArea;
