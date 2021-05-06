import React from 'react';
import './Intro.css';
import Typical from 'react-typical';
import { FaGithubSquare } from 'react-icons/fa';
import { AiOutlineMedium, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import CV from '../../images/resume.pdf';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
// import Particles from 'react-particles-js'; 



const Intro = () => {
    return (
        <div className="container intro">
            <div id="intro-section" className="col-md-12">
                <p className="text-success hello"></p>
                <h1 className="name-color">Minhaj Sadik</h1>
                <h3 className="font-weight-bolder text-success developer">
                    
                        <Typical
                        steps={[' FULL-STACK Developer', 3000, ' Creative Designer', 3000, ' Creative Developer', 3000, ' Competitive Programmer', 3000]}
                        loop={Infinity}
                        wrapper='b'
                    />
                    <Particles style={{ width: '50%', height: '50%' }}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 10,
                                    "random": true
                                },
                                "move": {
                                    "direction": "bottom",
                                    "out_mode": "out"
                                },
                                "line_linked": {
                                    "enable": false
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "remove"
                                    }
                                },
                                "modes": {
                                    "remove": {
                                        "particles_nb": 10
                                    }
                                }
                            }
                        }} />
                </h3>
                <a href={CV} download="Resume"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                <Link to="/about-section"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">About Me</button></Link>
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