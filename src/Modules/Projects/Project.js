import React, { useEffect } from 'react';
import './Projects.css';
import { FaGithubSquare } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Aos from "aos";
import "aos/dist/aos.css";

const Project = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const { img, title, description, gitHub, liveLink } = props.project;

    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card-group card-style">
                <div data-aos="flip-left" className="card">
                    <img src={img} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={gitHub}><FaGithubSquare /></a>
                        <a href={liveLink}><FiExternalLink /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;