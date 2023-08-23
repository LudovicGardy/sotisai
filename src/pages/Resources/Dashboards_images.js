import React, { useState } from 'react';
import styles from './Dashboards_images.css';
import Modal_component from "../../components/Modal_component";

function Dashboards_images() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    './images/LG_dashboards/EPICEA.jpg',
    './images/LG_dashboards/Clinical_FR.jpg',
    './images/LG_dashboards/Hybrid_FR.jpg',
    './images/LG_dashboards/Meta_analysis.jpg',
    './images/LG_dashboards/Alzheimer_navigation.jpg',
    './images/LG_dashboards/Methods_Halyzia.jpg',
    './images/LG_dashboards/CKDE.jpg',
  ];

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="dashboards_container">
      <div className="image-grid">
        {images.map((image, index) => (
          <div 
            className="image-cell" 
            key={index} 
            onClick={() => openModal(image)}
            style={index === 0 ? {paddingTop: '5px'} : {}}
          >
            <img title="Click to open image" src={image} alt={`Image ${index}`} />
          </div>
        ))}

        <Modal_component 
          isModalOpen={isModalOpen} 
          closeModal={closeModal} 
          currentImage={currentImage} 
        />
      </div>
    </div>
  );
}

export default Dashboards_images;
