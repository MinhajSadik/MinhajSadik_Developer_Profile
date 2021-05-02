import React, { useEffect } from 'react';
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";
import CV from '../../images/resume.pdf';
import Minhaj from '../../images/minhaj.jpg';
import { Link } from 'react-router-dom';


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div id="about-section" className="container about">
            <div className="back-line d-flex align-items-center">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">About Me</p>
                </div>
            </div>
            <div className="row">
                <div data-aos="flip-down" className="col-md-4 img-size">
                    <img src={Minhaj} alt="MinhajSadik" />
                </div>
                <div data-aos="flip-up" className="col-md-8 about-mySelf">
                    <p>Hello, I'm Minhaj Sadik,</p>
                    <a href={CV} download="Resume"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                    <Link to="/skill-section"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">My Skill</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;