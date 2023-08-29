import React from 'react';
import './Dev_types.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faDesktop } from '@fortawesome/free-solid-svg-icons';


// sotis analytics ouvre officiellement ses portes pour combler tous les besoins des enetreprises en matiere 
// de data science : developpement, formation, conseil, etc. 
// J'ai toujours été impressionné par la capacités des musiciens à jouer de la musique sans partition,
// et a changer d'instrument en fonction des besoins ou des envies. J'aime faire la même chose avec les données.
// Elles sont une musique, elles produisent un son et en fonction de ce son j'applique une partition différente,
// réarrangeant les notes pour produire une nouvelle musique ou réaccorde les instruments pour corriger les fausses notes.

function getRatingDescription(score) {
    switch (score) {
      case 1:
        return "Poor";
      case 2:
        return "Average";
      case 3:
        return "Good";
      case 4:
        return "Very Good";
      case 5:
        return "Excellent";
      default:
        return "";
    }
  } 

function Rating({ label, score }) {
return (
    <div className="rating-item">
    <div className="rating-label">{label}</div>
    <div className="rating-circles">
        {[...Array(5)].map((_, i) => (
        <div
            key={i}
            title={getRatingDescription(i + 1)} 
            className={`rating-circle ${i < score ? 'filled' : ''}`}
        ></div>
        ))}
    </div>
    </div>
);
}

function Dev_types({ setScreenshotsArea }) {
  const [selectedBox, setSelectedBox] = React.useState(0);

  const handleClick = (index) => {
    setSelectedBox(index);
    setScreenshotsArea(index);
  };

  const categories = [
    {
      title: (
        <div className="title-container">
          <div className="title-box tbox-h4-left">
            <h4><FontAwesomeIcon icon={faDesktop} className="devtypes_icon"/> Qt</h4>
          </div>
          <div className="title-box tbox-h4-right">
            <h4><FontAwesomeIcon icon={faGear} className="devtypes_icon"/> Python</h4>
          </div>
        </div>
      ),
      ratings: [
        { label: 'Performance', score: 5 },
        { label: 'Flexibility', score: 3 },
        { label: 'Scalability', score: 5 },
        { label: 'Sécurity', score: 3 },
        { label: 'Implementation', score: 4 },
        { label: 'Local deployment', score: 3 },
        { label: 'Web deployment', score: 1 },
        { label: 'Distant databases', score: 3 },
      ],
    },
    {
        title: (
          <div className="title-container">
            <div className="title-box tbox-h4-left">
              <h4><FontAwesomeIcon icon={faDesktop} className="devtypes_icon"/> Streamlit</h4>
            </div>
            <div className="title-box tbox-h4-right">
              <h4><FontAwesomeIcon icon={faGear} className="devtypes_icon"/> Python</h4>
            </div>
          </div>
        ),
        ratings: [
          { label: 'Performance', score: 3 },
          { label: 'Flexibility', score: 4 },
          { label: 'Scalability', score: 2 },
          { label: 'Sécurity', score: 2 },
          { label: 'Implementation', score: 5 },
          { label: 'Local deployment', score: 5 },
          { label: 'Web deployment', score: 5 },
          { label: 'Distant databases', score: 3 },
        ],
      },

    {
      title: (
        <div className="title-container">
          <div className="title-box tbox-h4-left">
            <h4><FontAwesomeIcon icon={faDesktop} className="devtypes_icon"/> React</h4>
          </div>
          <div className="title-box tbox-h4-right">
            <h4><FontAwesomeIcon icon={faGear} className="devtypes_icon"/> Python</h4>
          </div>
        </div>
      ),
      ratings: [
        { label: 'Performance', score: 4 },
        { label: 'Flexibility', score: 5 },
        { label: 'Scalability', score: 5 },
        { label: 'Sécurity', score: 4 },
        { label: 'Implementation', score: 4 },
        { label: 'Local deployment', score: 3 },
        { label: 'Web deployment', score: 4 },
        { label: 'Distant databases', score: 4 },
      ],
    },
  ];

  return (
    <div className="devtypes_section">
      <div className="devtypes_container">
        <div className="devtypes_wrapper">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`devtypes_hbox ${selectedBox === index ? 'selected' : ''}`}
              onClick={() => handleClick(index)}
            >
              {category.title}
              {category.ratings.map((rating, i) => (
                <Rating key={i} label={rating.label} score={rating.score} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dev_types;
