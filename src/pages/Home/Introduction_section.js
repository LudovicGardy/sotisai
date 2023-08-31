import React from "react";
import "./Introduction_section.css";
import MovingComponent from "react-moving-text";
import { Fade } from 'react-reveal';

// After several years' experience in data science applied to medical research, I am setting out a new and broader path over other 
// fields of application, to take part in other awesome and exciting projects. Wether you are a company, a scale-up,
// a start-up, a lab, or a research center, I can help you to turn your data into insight, and insight into action.

// Avec Sotis A.I., bénéficiez d'une expertise en science des données et en intelligence artificielle pour vos projets. 
// Développez votre business en ajoutant à votre équipe un data scientist expérimenté et de confiance, 
// capable de vous accompagner de manière flexible et agile dans la transformation digitale de votre entreprise. 

// Ludovic Gardy, data scientist indépendant et fondateur de Sotis A.I. couvre vos besoins sur l'ensemble du cycle de vie de vos données, pour des missions de conseil, de formation, de développement et de recherche, toute durée.

function Introduction() {
  return (
    <div className="intro_container">
      <div className="text_container">
        <Fade duration={2000}>
        <div className="intro_text">
          <h1>
            Turn data into insight, and insight into action
          </h1>
          <p>
          With Sotis A.I, leverage premier data science and artificial intelligence expertise for your projects. 
          Enhance your business by engaging an experienced and trusted data expert, poised to provide sustainable, scalable, flexible, 
          and agile support in your company's digital evolution. Ludovic Gardy, independent data scientist and founder of Sotis A.I., 
          caters to your needs across the full data lifecycle, including engineering, consulting, training, research, development, 
          and deployment.
          </p>
         
          <div className="moving_text">
            <MovingComponent
              type="typewriter"
              dataText={["Decode your business metrics", "Surpass expectations"]}
              className="moving_text"
            />
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Introduction;
