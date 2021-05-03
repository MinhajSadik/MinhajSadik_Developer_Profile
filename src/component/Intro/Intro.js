import React from 'react';
import './Intro.css';
import Typical from 'react-typical';
import { FaGithubSquare } from 'react-icons/fa';
import { AiOutlineMedium, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import CV from '../../images/resume.pdf';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';



const Intro = () => {
    return (
        <div className="container intro">
            <div id="intro-section" className="col-md-12">
                <p className="text-success hello"></p>
                <h1 className="name-color">Minhaj</h1>
                <h3 className="font-weight-bolder text-success developer">
                    I am a
                        <Typical
                        steps={[' Web Developer', 3000, ' Designer', 3000, ' Programmer', 3000, ' Clever Learner', 3000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h3>
                <a href={CV} download="Resume"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                <Link to="/about-section"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">About Me</button></Link>
                <Particles
                    params={{
                        "fps_limit": 28,
                        "particles": {
                            "collisions": {
                                "enable": false
                            },
                            "number": {
                                "value": 200,
                                "density": {
                                    "enable": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 30,
                                "opacity": 0.4
                            },
                            "move": {
                                "speed": 1
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "opacity_min": 0.05,
                                    "speed": 1,
                                    "sync": false
                                },
                                "value": 0.4
                            }
                        },
                        "polygon": {
                            "enable": true,
                            "scale": 0.5,
                            "type": "inline",
                            "move": {
                                "radius": 10
                            },
                            "url": "/small-deer.2a0425af.svg",
                            "inline": {
                                "arrangement": "equidistant"
                            },
                            "draw": {
                                "enable": true,
                                "stroke": {
                                    "color": "rgba(255, 255, 255, .2)"
                                }
                            }
                        },
                        "retina_detect": false,
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "size": 6,
                                    "distance": 40
                                }
                            }
                        }
                    }} />
                <br />
                <br />
                <br />
                <br />

                <div className="back-line d-flex align-items-center">
                    <div className="front-box d-flex align-items-center">
                        <p className="d-flex align-items-center">Follow Me</p>
                    </div>
                </div>

                <div className="icon">
                    <a className="icon2" href="https://github.com/MinhajSadik" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                    <a className="icon2" href="https://www.linkedin.com/in/MinhajSadik" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a className="icon2" href="https://medium.com/@minhajsadik" target="_blank" rel="noopener noreferrer"><AiOutlineMedium /></a>
                    <a className="icon2" href="https://www.youtube.com/channel/UC6I0U9NjTTQQGpKI73_mNXQ" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
                </div>
            </div>
        </div>
    );
};

export default Intro;