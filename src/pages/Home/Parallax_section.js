import React from "react";
import "./Parallax_section.css";
import { Fade, LightSpeed, Zoom } from 'react-reveal';


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

            <div className="testimonials-content">
            <div className="testimonials-content-img">
                <img src="/images/gardy_black_bg.jpg"></img>
            </div>
            <div className="services-quote-text testimonials-quote-text">
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

                <div className="horizontal-box-parallax">

                    {/* <div className="vertical-box-parallax v-box-par-img hover14">
                        <img src="/images/LG_imgs/client.png" alt="client" />
                    </div> */}

                    <div className="vertical-box-parallax v-box-par-txt">

                        <div className="text-box-parralax"> 

                            <div className="text-item-parallax">

                            {/* <div className="text-little-box-parallax">
                                    <h4>Services and accessibility</h4>
                                    <p>I specialize in crafting innovative algorithms and designing data pipelines to 
                                        answer complex questions, automate processes, and uncover valuable insights 
                                        that drive business growth. In collaboration with a team or working independently, I engage in various facets 
                                        of data and solution development. My expertise spans statistical modeling, data engineering, 
                                        UX/UI design, web development, web scraping, project management, and more.</p>
                                </div> */}

                                <div className="text-little-box-parallax">
                                    <h4>Languages and Frameworks</h4>
                                    <ul>
                                        <li><span>Programming languages:</span> Python, R</li>
                                        <li><span>Web Backend Frameworks:</span> Flask, FastAPI, Django</li>
                                        <li><span>Web Frontend Frameworks:</span> React, NodeJS</li>
                                        <li><span>Basic web technologies:</span> HTML, CSS, JavaScript</li>
                                        <li><span>Documentation technologies:</span> LaTeX, Markdown, XML</li>
                                    </ul>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Database Management and Data Handling</h4>
                                    <ul>
                                        <li><span>Relational Databases:</span> PostgreSQL, MySQL, Pymssql</li>
                                        <li><span>NoSQL Databases:</span> MongoDB, Redis</li>
                                        <li><span>Database Management Tools:</span> SQLAlchemy, Pinecone</li>
                                        <li><span>Data Storage Solutions:</span> Data lakes, Data warehouses, Dynamic databases</li>
                                        <li><span>Data Transformation:</span> Snowflake, DBT</li>
                                    </ul>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Artificial Intelligence and MLOps</h4>
                                    <ul>
                                        <li><span>Machine Learning and AI:</span> Embeddings, Computer Vision, CNN, LLM, NLP</li>
                                        <li><span>NLP Integration and Models:</span> OpenAI API, Langchain, Llama</li>
                                        <li><span>Model Deployment and Serving:</span> TensorFlow Serving, MLflow, TorchServe</li>
                                        <li><span>Experiment Tracking and Versioning:</span> MLflow, DVC (Data Version Control)</li>
                                        <li><span>Model Monitoring and Management:</span> Prometheus, Grafana, Evidently AI</li>
                                        <li><span>Workflow Automation:</span> Github Actions, Jenkins, Airflow</li>                                       
                                        {/* <li><span>Workflow Automation:</span> Kubeflow, Apache Airflow, Jenkins</li>                                        */}
                                    </ul>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Development and DevOps</h4>
                                    <ul>
                                        <li><span>Version Control and CI/CD:</span> Github, Gitlab</li>
                                        <li><span>Containerization and Orchestration:</span> Docker</li>
                                        <li><span>Cloud Platforms:</span> Azure, AWS, GCP</li>
                                    </ul>
                                </div>

                                <div className="text-little-box-parallax">
                                    <h4>Additional Tools and Technologies</h4>
                                    <ul>
                                        <li><span>Data extraction:</span> Web scraping, Document parsing</li>
                                        {/* <li><span>Big Data Management:</span> Hadoop, Spark, Databricks</li> */}
                                        <li><span>Big Data Management:</span> Hadoop, Spark, Databricks</li>
                                        {/* <li><span>Real-Time Data Processing:</span> Apache Kafka, Apache Flink, Streamlit</li> */}
                                        <li><span>Real-Time Data Processing:</span> Streamlit</li>
                                    </ul>
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
