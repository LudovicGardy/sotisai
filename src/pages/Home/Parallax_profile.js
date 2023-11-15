import React from "react";
import "./Parallax_profile.css";

function Profile() {
    return (

    <div className="parallax-profile-content">
    <div className="parallax-profile-content-img">
        <img src="/images/gardy_black_bg.jpg"></img>
    </div>
    <div className="services-quote-text parallax-profile-quote-text">
        <figure className="services-figure figure-large">
            <blockquote className="blockquote">
                {/* <p>I am dedicated to developing innovative algorithms and designing efficient data pipelines 
                    that tackle complex challenges, streamline processes, and reveal critical insights to propel business growth.</p>

                <p>Whether collaborating with a team or working solo, I immerse myself in various aspects of data and 
                    solution development with a commitment to openness and transparency. You'll be fully informed 
                    about my recommendations for your product, my actions, and my progress at every step of our journey together.</p> 
                    
                <p>My pursuit of excellence is relentless, and I continuously update my skills to ensure that my 
                    clients receive the highest quality products. My drive and passion for my work empower me to 
                    understand and solve any problem that comes my way.</p> */}

                <p>I specialize in creating innovative algorithms and efficient data pipelines to address complex challenges 
                    and unlock key insights for business growth. In my work, whether in collaboration or solo, 
                    I emphasize transparency and keep you fully informed about your project's progress 
                    and my recommendations.</p>

                <p>Committed to excellence, I constantly refine my skills to deliver top-quality products. My passion and 
                    determination, bolstered by a robust network of engineers and specialists, enable me to effectively 
                    understand and resolve any challenges encountered.</p>

                <figcaption className="figcaption">
                    <span className="figcaption-span-services">Ludovic</span>
                </figcaption>
            </blockquote>
        </figure>
    </div> 
    </div>

 );
}

export default Profile;
