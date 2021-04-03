import React from 'react';
import './Intro.css';
import Typical from 'react-typical';
import { FaGithubSquare } from 'react-icons/fa';
import { AiOutlineMedium, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import CV from '../../images/resume.pdf';



const Intro = () => {
    return (
        <div className="container intro">
            <div id="intro-section" className="col-md-12">
                <p className="text-success hello"></p>
                <h1 className="name-color"> Yaa, Allah Ya Raab</h1>
                <h3 className="font-weight-bolder text-success developer">
                    I am a
                        <Typical
                        steps={[' Web Developer', 3000, ' Designer', 3000, ' Programmer', 3000, ' YouTuber', 3000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h3>
                <a href={CV} download="Al Rabbi CV"><button className="btn btn-success my-2 my-sm-0 btn-style">Get Resume</button></a>
                <a href="#about-section"><button className="btn btn-outline-success my-2 my-sm-0 btn-style">About Me</button></a>
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
                    <a className="icon2" href="https://github.com/rabbism" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                    <a className="icon2" href="https://www.linkedin.com/in/s-m-al-rabbi-1976b11b1/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a className="icon2" href="https://medium.com/" target="_blank" rel="noopener noreferrer"><AiOutlineMedium /></a>
                    <a className="icon2" href="https://www.youtube.com/channel/UCzoklnSwNmq_0ldHX6q-L0Q?view_as=subscriber" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
                </div>
            </div>
        </div>
    );
};

export default Intro;