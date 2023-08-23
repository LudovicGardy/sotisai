import React from "react";
import "./Parallax.css";
import { Fade, LightSpeed, Zoom } from 'react-reveal';
import { Button } from "../../components/Button";


function Parallax() {
  return (
    /* 
                <div className="text-box-parallax">
                    <div className="text-item-parallax">
                    <h2>Automatic EEG analysis</h2>
                    </div>
                    <div className="text-item-parallax">
                    <h2>Online displays</h2>
                    </div>
                </div>
    */

    <div className="parallax">
        <div className="parallax-inner">

            {/* <Fade duration={2000}> */}
            <div className="container-box-parallax">

                <div className="horizontal-box-parallax">

                    <div className="vertical-box-parallax v-box-par-img hover14">
                        <img src="/images/LG_imgs/client.png" alt="client" />

                        {/* <div className="parallax_button_wrapper">
                            <div className="hero-btns">
                                <Button
                                    className="btns"
                                    buttonStyle="btn--secondary"
                                    buttonSize="btn--large2"
                                    redirection="/contact"
                                >
                                    CONTACT
                                </Button>
                            </div>
                        </div> */}
                    </div>

                    <div className="vertical-box-parallax v-box-par-txt">

                        <div className="text-box-parralax"> 

                            <div className="text-item-parallax">

                                <div className="text-little-box-parallax">
                                    <h4>What services do you offer?</h4>
                                    <p>I specialize in crafting innovative algorithms and designing data pipelines to 
                                        answer complex questions, automate processes, and uncover valuable insights 
                                        that drive business growth.</p>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>How do you ensure accessibility?</h4>
                                    <p>My solutions are tailored to be user-friendly and adaptable to the unique needs 
                                        of diverse clients. Whether online or offline, I build tools that are accessible 
                                        to both experts and non-experts, aligning closely with specific business requirements.</p>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>What additional skills do you bring?</h4>
                                    <p>In collaboration with a team or working independently, I engage in various facets 
                                        of data and solution development. My expertise spans statistical modeling, data engineering, 
                                        UX/UI design, web development, web scraping, project management, and more.</p>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Who can benefit from your services?</h4>
                                    <p className="zzz">From start-ups to multinational corporations across various sectors, 
                                        today's competitive marketplace demands data-driven strategies. 
                                        I offer tailored solutions to companies of all sizes, enhancing their products and services. 
                                        My background also includes specialized experience in research and healthcare, 
                                        providing an additional layer of expertise.</p>
                                </div>

                            </div>


                            {/* <div className="parallax-conclusion">
                                <h4>If your needs are already clearly defined, we can immediately proceed. If they aren't, I am here to assist in determining your requirements and help guide the subsequent steps as necessary.</h4>
                            </div> */}
        
                        </div>

                    </div>
                </div>
        
            </div>
            {/* </Fade> */}

        </div>
    </div>

  );
}

export default Parallax;
