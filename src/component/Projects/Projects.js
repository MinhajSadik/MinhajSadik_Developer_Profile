import React from 'react';
import './Projects.css';
import Grocery from '../../images/projectImage/Grocery-Shop.png';
import Urban from '../../images/projectImage/Urban-Riders.png';
import Ema from '../../images/projectImage/Ema-Jhon Simple.png';
import hotGadgets from '../../images/projectImage/hotGadgets.JPG';
import pandaCommerce from '../../images/projectImage/pandaCommerce.JPG';
import Team from '../../images/projectImage/footballTeamSelector.png'
import Project from './Project';

const Projects = () => {

    const allProjects = [
        {
            id: '01', img: "" + Grocery, title: "Grocery-Shop", description: "A Full-Stack Grocery-Shop Website.",
            gitHub: "https://github.com/MinhajSadik/Full-Stack-Grocery-Shop", liveLink: "https://full-stack-grocery-house-shop.netlify.app/"
        },

        {
            id: '02', img: "" + Ema, title: "Ema-Jhon Simple", description: "A Full-Stack Ema-Jhon Simple  Website.",
            gitHub: "https://github.com/MinhajSadik/React-Ema-Jhon-Simple", liveLink: "https://full-stack-ema-jhon-simple.netlify.app/ "
        },

        {
            id: '03', img: "" + Urban, title: "Urban Riders", description: "A  Dynamic And  Authorization Website.",
            gitHub: "https://github.com/MinhajSadik/React-Urban-Riders", liveLink: "https://google-authorization-urban-riders.netlify.app/"
        },

        {
            id: '04', img: "" + hotGadgets, title: "Hot Gatgets", description: "A front-end E-commerce website.",
            gitHub: "https://github.com/MinhajSadik/Hot-Gadget", liveLink: "https://minhajsadik.github.io/Hot-Gadget/"
        },

        {
            id: '05', img: "" + pandaCommerce, title: "Panda Commerce", description: "A front-end Panda Commerce website.",
            gitHub: "https://github.com/MinhajSadik/Panda-E-commerce-Bootstrap", liveLink: "https://minhajsadik.github.io/Panda-E-commerce-Bootstrap/Index.html"
        },

        {
            id: '05', img: "" + Team, title: "Football Team Selectors", description: "A React-Router Football Team Selectors Websites.",
            gitHub: "https://github.com/MinhajSadik/Football-League-Router", liveLink: "https://football-league-router.netlify.app/"
        }
    ]


    return (
        <div id="project-section" className="container skill">
            <div className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">Projects</p>
                </div>
            </div>

            <div className="row">
                {
                    allProjects.map(project => <Project key={project.id} project={project} ></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;