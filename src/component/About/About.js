/* eslint-disable jsx-a11y/iframe-has-title */
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Minhaj from '../../images/minhaj.jpg';
import CV from '../../images/resume.pdf';
import styles from "./../../styles.module.css";
import './About.css';



const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const alignCenter = { display: 'flex', alignItems: 'center' }


    return (
        <div id="about-section" className="container about">
            <div className="back-line d-flex align-items-center">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">About Me</p>
                </div>
            </div>
            <div className="row">
                <div data-aos="flip-down" className="col-md-6 img-size">
                    <img src={Minhaj} alt="MinhajSadik" />
                    <h3 style={{ marginRightt: '100%', marginTop: '15px', marginBottom: '15px'}}>Hello👋 I'M MINHAJ SADIK</h3>
                    <a href={CV} download="Resume"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                    <Link to="/skill"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">My Skill</button></Link>
                </div>
                <div data-aos="flip-up" className="col-md-6 about-mySelf">
                <div>
                    <div className={styles.background} />

                    <Parallax pages={5}>
                        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <p className={styles.scrollText}>Name: Minhaj Sadik</p>
                        </ParallaxLayer>

                        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.sticky}`}>
                            <p>Software Enginner</p>
                        </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                        <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                            <p>Front-End</p>
                        </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                        <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                            <p>Back-End</p>
                        </div>
                        </ParallaxLayer>
                    </Parallax>
                     
                 </div>
                    {/* <h3 style={{ marginRightt: '100%', marginTop: '15px', marginBottom: '15px'}}>Hello👋 I'M MINHAJ SADIK</h3>
                    <a href={CV} download="Resume"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                    <Link to="/skill"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">My Skill</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default About;
