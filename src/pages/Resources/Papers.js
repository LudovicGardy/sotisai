import React from "react";
import { Fade, LightSpeed, Zoom } from 'react-reveal';

import "../../App.css";
import "./Papers.css";


function PapersArea() {
  return (
    <>
    <Fade duration={2000}>
    <div className="papers_container">
        <div className="vertical_box_papers">
            <h1>Publications</h1>
            <h4>
              Over the past ten years, we validated our methods using both clinical macro-electrodes and research micro-electrodes. This work was published in peer-reviewed journal and presented in international conferences. Our project was also awarded by several institutional prices or contests by TTT (Toulouse Tech Transfer), BPI (public bank), french government (investir l'avenir), Occitanie disctrict (région Occitanie), and CNRS.
            </h4>
            <p>
              Despouy, E., Curot, J., Reddy, L., Nowak, L. G., Deudon, M., Sol, J.-C., Lotterie, J.-A., Denuelle, M., Maziz, A., Bergaud, C., Thorpe, S.J., Valton, L., and Barbeau, E.J. (2020). Recording local field potential and neuronal activity with tetrodes in epileptic patients. Journal of Neuroscience Methods, 341, 108759.
            </p>
            <p>
              Gardy, L., Barbeau, E., and Hurter, C. (2020). Automatic detection of epileptic spikes in intracerebral eeg with convolutional kernel density estimation. In 4th International Conference on Human Computer Interaction Theory and Applications, pages 101-109. SCITEPRESS-Science and Technology Publications.
            </p>
            <p>
              Despouy, E., Curot, J., Denuelle, M., Deudon, M., Sol, J.-C., Lotterie, J.-A., Reddy, L., Nowak, L. G., Pariente, J., Thorpe, S. J., , Valton, L., and Barbeau, E.J. (2019). Neuronal spiking activity highlights a gradient of epileptogenicity in human tuberous sclerosis lesions. Clinical Neurophysiology, 130(4), 537-547.
            </p>

        </div>
    </div>

    <div className="papers_container">
        <div className="vertical_box_papers">
            <h1>Intellectual property</h1>
            <h4>
              With the support of Toulouse Tech Transfer, we are currently in the process of filing several measures to protect the intellectual property of our tools, in particular the automatic detection algorithms.
            </h4>
            <h4>
              We are also protecting the databases used to train the artificial intelligences that are the basis of our methods. These databases are very valuable and took several months to build, by epileptologists and epilepsy researchers.
            </h4>
            <h4>
              Our databases are enhanced as new patient EEG data are processed, allowing us to continuously improve our algorithms.
            </h4>
            <p>
              French Patent n° FR3128111
            </p>
            <p>
              PCT extension n° EP2022/079304
            </p>
            <p>
              Licensed databases and software
            </p>

        </div>
    </div>

    </Fade>
    </>
  );
}

export default PapersArea;
