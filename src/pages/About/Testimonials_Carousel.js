import React, { useState } from 'react';
import { ButtonTestimonials } from "../../components/Button";

import './Testimonials_Carousel.css';

const images = [
    'https://media.licdn.com/dms/image/C5103AQHwqOo_l1BNZg/profile-displayphoto-shrink_800_800/0/1573057530054?e=1692835200&v=beta&t=X94x0EB7flAK78p9fmmiVYqlMVJ5w8et0P3hPbYPhe8',
    'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=jaEkolUAAAAJ&citpid=2',
    'https://media.licdn.com/dms/image/C4E03AQGWWGSsBeD_cw/profile-displayphoto-shrink_800_800/0/1603293854019?e=1692835200&v=beta&t=BWsaL_sg0er5TBc0IbVa7N8mA7l3kj06aNbhj0fv14g',
    "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=uXHPPAkAAAAJ&citpid=13",
    'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Mlg-vq4AAAAJ&citpid=2',
    'https://media.licdn.com/dms/image/D4D03AQGVR_5d16lRDw/profile-displayphoto-shrink_800_800/0/1635175856118?e=1692835200&v=beta&t=38m4kxytDiATScIERtmI5Xg9qSWTvBzAPXHtsqOSDfw',
    'https://media.licdn.com/dms/image/D4E03AQH7TQAQU25bug/profile-displayphoto-shrink_800_800/0/1673696484482?e=2147483647&v=beta&t=m-sS4_D6dCg2QhgqhGUKJZ5hP9CBqOGSyXSJd9n_n4A',
    'http://cerco.cnrs.fr/wp-content/uploads/2019/05/Berry-Isabelle2-e1561022593408.jpg',
  ];

const social = [
    'https://www.linkedin.com/in/anis-krache-ph-d-869a8b145/',
    'https://scholar.google.fr/citations?user=jaEkolUAAAAJ&hl=fr&oi=sra',
    'https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/',
    'https://www.chu-toulouse.fr/-neurologie-departement-',
    'https://scholar.google.fr/citations?user=Mlg-vq4AAAAJ&hl=fr&oi=sra',
    'https://www.linkedin.com/in/anne-lasfargues-delannoy-b0064662/',
    'https://www.linkedin.com/in/anais-servais-47823a155/',
    'https://cerco.cnrs.fr/isabelle-berry/',

]

const names = [
    'Anis Krache, Ph.D.',
    'Leila Reddy, Ph.D.',
    'Emmanuel Barbeau, Ph.D.',
    'Jonathan Curot, M.D., Ph.D.',
    'Robin Baurès, Ph.D.',
    'Anne Lasfargues-Delannoy',
    'Anaïs Servais, Ph.D.',
    'Isabelle Berry, M.D., Ph.D.',

    // "Bruno B.",
    // "Marine P.",
    // "Jean-Christophe C.",
];


// const professions = [
//   'Dr. in Pharmacokinetics, NBE-DMPK modelling & simulation, @Merck',
//   'Dr. in Neurpsychology, Researcher, @CNRS',
//   'Dr. in Kinesiology, Researcher, @CNRS',
//   'Speech and language therapist, PhD, Toulouse Hospital, @CNRS',
//   'Dr. in Neurosciences, Neuropsychologue, @CNRS',
  
//   'Ingénieur, PhD, @Capgemini',
//   'Statisticienne, @Roche pharmaceutique',
//   'Cheffe de projet, @Capgemini',
// ];

const professions = [
    'Dr. in Pharmacokinetics, NBE-DMPK modelling & simulation',
    'Dr. in Computation and Neural Systems, Researcher',
    'Dr. in Neuropsychology, Researcher',
    "Dr. in Medicine and in Neuroscience, Neurologist",
    'Dr. in Kinesiology, Professor',
    'Speech-language pathologist and PhD candidate',
    'Dr. in Neurosciences, Neuropsychologist',
    'Dr. in Medicine and in Nuclear Physics, Lab director',
];


const employers = [
    '@Merck Pharmaceuticals',
    '@CNRS',
    '@CNRS',
    '@Toulouse Hospital and @CNRS',
    '@CNRS and @Toulouse University',
    '@Toulouse Hospital and @CNRS',
    '@CNRS',
    '@CNRS',
]

const text_FR = [
    "J'ai eu l'opportunité de travailler avec Ludovic sur plusieurs projets en lien avec les statistiques, les représentations graphiques ainsi que sur les outils de modélisation pharmacocinétique. Ce qui m'a le plus marqué durant notre collaboration, c'est la profondeur de son esprit scientifique et ses qualités de synthèse. Durant mes trois années de thèse, j'ai eu l'occasion d'échanger avec Ludovic sur différents sujets et bien qu'étranger au domaine de la pharmacocinétique, il a su m'apporter un soutien considérable dans la gestion des données et des différentes approches statistiques. Ludovic a toujours fait preuve de patience, de pédagogie et d'esprit d'équipe. Je le recommande sans hésiter pour toute entreprise ou projet nécessitant une expertise en approche statistique, modélisation ou data science au sens large.",
    "N/A",
    "J’ai le plaisir de travailler avec Ludovic depuis plusieurs années sur des projets de data science et d’IA, qui souvent comportaient une forte part de statistiques. Ca a été tout simplement une excellente expérience. Ludovic a une grande force de travail. Il est à l’écoute, rapide et très bien organisé. C’est un atout fort pour un projet que je recommande sans aucune réserve.",
    "J’ai eu le plaisir et la chance de travailler avec Ludovic Gardy depuis plus de 6 ans. Ses compétences en statistiques et en tant que développeur en Python, sa rigueur et sa disponibilité, nous ont permis de faire aboutir plusieurs projets de recherche clinico-scientifiques, comme par exemple valoriser des données électrophysiologiques sur la base du deep learning. Ces différentes qualités en font un collaborateur très précieux.",
    "J'ai fait appel à Ludovic pour un projet d'enregistrement et de traitement du signal EEG intracérébral. Cette technique était tout à fait nouvelle pour moi, tant du point de vue des contraintes expérimentales à réfléchir dans la création du protocole que dans l'analyse de données. Dans les deux cas, Ludovic a été une source d'information et d'aide inestimable. Son expertise a été mise au service du succès de ce projet et permis sa réalisation. Je n'ai aucun doute que Ludovic est LA personne nécessaire dans ce genre de projet.",
    "En tant qu’orthophoniste et doctorante, j’apprécie énormément travailler et échanger avec Ludovic pour son relationnel avec l’équipe clinique et les patients. Ludovic amène beaucoup de pédagogie dans ses explications des analyses et du code, reflétant son expérience et sa maîtrise du sujet.",
    "Durant mes années de thèse de doctorat au Centre de Recherche sur le Cerveau de Toulouse, j'ai souvent sollicité Ludovic pour des projets faisant appel à ses qualités de développeur en Python et en Matlab. Ludovic a toujours fait preuve de disponibilité et de pédagogie dans l'apport de solutions.",
    "Un professionnel très compétent et à l’esprit collectif.",
  ];

const text_EN = [
    "I had the opportunity to work with Ludovic on several projects involving statistics, graphical representations and pharmacokinetic modeling tools. What impressed me most during our collaboration was the depth of his scientific mind and his ability to synthesize information. During the three years of my thesis, I had the opportunity to exchange views with Ludovic on a variety of subjects, and although he was a stranger to the field of pharmacokinetics, he was able to provide me with considerable support in managing data and the various statistical approaches. Ludovic always demonstrated patience, pedagogy and team spirit. I would recommend him without hesitation for any company or project requiring expertise in statistical approaches, modeling or data science",
    "Ludovic's expertise in signal processing has been very valuable to our team, and his contributions have significantly advanced several projects.",
    "I've had the pleasure of working with Ludovic for a number of years on data science and AI projects, which often involved a high proportion of statistical analyses. It has simply been an excellent experience. Ludovic is a very hard worker. He is a good listener, quick on his feet and very well organized. He is a very strong asset, and one I would recommend without reservation for any project.",
    "For over 6 years, I've had the good fortune and pleasure to work with Ludovic. His skills in statistics and as a Python developer, as well as his rigor and availability, have enabled us to bring several clinico-scientific research projects to fruition, such as valorizing electrophysiological data on the basis of deep learning. These qualities make him an invaluable collaborator.",
    "I called on Ludovic for a project involving the recording and processing of intracerebral EEG activities. This was a completely new technique for me, both in terms of the experimental constraints I had to consider in creating the protocol and in analyzing the data. In both cases, Ludovic was an invaluable source of information and help. His expertise contributed to the success of this project and made it a reality. I have no doubt that Ludovic is THE person needed for this kind of project.",
    "As a speech therapist and young researcher at the same time, I really enjoy working and talking with Ludovic because of the way he relates to the clinical team and patients. Ludovic's explanations of analyses and code are very pedagogical, reflecting his experience and mastery of the subject.",
    "During my doctoral thesis at the Brain and Cognition Research Center in Toulouse, I often called on Ludovic for projects requiring his skills as a developer in Python and Matlab. Ludovic has always been available and pedagogical in providing solutions.",
    "A very competent and team-oriented professional.",
  ];

const links = [
    'https://www.google.com',
    'https://www.youtube.com',
    'https://www.facebook.com',
  ];
  

  function TestimonialsCarousel() {
      // const [currentImageIndex, setCurrentImageIndex] = useState(0);

      let min = 0;
      let max = text_EN.length - 1;
      let rndInt = Math.floor(Math.random() * (max - min + 1) + min);
      console.log(rndInt);
      // setCurrentImageIndex(rndInt);
      const [currentImageIndex, setCurrentImageIndex] = useState(rndInt);


    // Fonction JavaScript pour changer la couleur
    function handleColorChange() {
      let textDiv = document.querySelector('.testimonials_individual_card_text');
      // textDiv.style.backgroundColor = 'rgba(240, 220, 255, 1)';
      textDiv.style.opacity = 0.5;


      // setTimeout(() => {
      //   textDiv.style.backgroundColor = 'white';
      // }, 300);
      
      setTimeout(() => {
        textDiv.style.opacity = 1;
      }, 900);

    }


  
    function handlePrevious() {
      setCurrentImageIndex(currentImageIndex === 0 ? text_EN.length - 1 : currentImageIndex - 1);
      handleColorChange();
    };
  
    function handleNext() {
      setCurrentImageIndex(currentImageIndex === text_EN.length - 1 ? 0 : currentImageIndex + 1);
      handleColorChange();
    };
  
    function handleClick() {
      window.open(links[currentImageIndex], '_blank');
    }
  
    return (
      <div className="testCards_container">
        <div className="testCards_wrapper">
          {/* <Fade duration={2000}> */}
            <div className="testimonials_carousel">
              <div className="testimonials_individual_card">
                <div className="testimonials_individual_card_image">
                  <a href={social[currentImageIndex]} target="_blank" rel="noopener noreferrer"><img src={images[currentImageIndex]} alt="testimonials" /></a>
                  <p className='card-title'> {names[currentImageIndex]} </p>
                  <p> {professions[currentImageIndex]} </p>
                  {/* <p> {employers[currentImageIndex]} </p> */}

                  {/* <progress value={currentImageIndex+1} max={text_EN.length} id="imageProgress"></progress> */}
                   <div className="progress-bar">
                    <div className="progress-bar-fill" style={{width: `${(currentImageIndex+1)*100/text_EN.length }%`}}></div>
                  </div>

                  <div className="arrow-container">
                    <div className="arrow arrow-left arrow-testimonials hover-color-1"><i className="fas to-left" onClick={handlePrevious}></i></div>
                    <div className="arrow arrow-right arrow-testimonials hover-color-2"><i className="fas to-right" onClick={handleNext}></i></div>
                  </div>
                </div>
                <div className="testimonials_individual_card_text">
                  <p> {text_EN[currentImageIndex]} </p>
                </div>

              </div>
                <ButtonTestimonials
                  className="btns"
                  buttonStyle="btn--third"
                  buttonSize="btn--large3"
                  redirection="/contact"
                  >   
                  Leave a review
                </ButtonTestimonials>
            </div>
          {/* </Fade> */}
        </div>
      </div>
    );
  }
  
  export default TestimonialsCarousel;