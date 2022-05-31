import React from "react";
import Blogs from "../../images/projectImage/blogs_app_image.png";
import Ema from "../../images/projectImage/Ema-Jhon Simple.png";
import Team from "../../images/projectImage/footballTeamSelector.png";
import Grocery from "../../images/projectImage/Grocery-Shop.png";
import hotGadgets from "../../images/projectImage/hotGadgets.JPG";
import pandaCommerce from "../../images/projectImage/pandaCommerce.JPG";
import Urban from "../../images/projectImage/Urban-Riders.png";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const allProjects = [
    {
      id: "01",
      img: "" + Blogs,
      title: "Blogs Website",
      description:
        "A Full Stack well state management comment and reply featured blog website",
      gitHub: "https://github.com/MinhajSadik/Blog_Website_FullStack",
      liveLink: "https://blogs-website-client.netlify.app/",
    },
    {
      id: "02",
      img: "" + Grocery,
      title: "Grocery Shop",
      description: "A Full Stack Grocery Shop Website.",
      gitHub: "https://github.com/MinhajSadik/Full-Stack-Grocery-Shop",
      liveLink: "https://full-stack-grocery-house-shop.netlify.app/",
    },

    {
      id: "03",
      img: "" + Ema,
      title: "Ema Jhon Website",
      description: "A Full Stack Ema Jhon Website.",
      gitHub: "https://github.com/MinhajSadik/React-Ema-Jhon-Simple",
      liveLink: "https://full-stack-ema-jhon-simple.netlify.app/",
    },
    {
      id: "05",
      img: "" + hotGadgets,
      title: "Hot Gatgets",
      description: "A Front End E-Commerce website.",
      gitHub: "https://github.com/MinhajSadik/Hot-Gadget",
      liveLink: "https://minhajsadik.github.io/Hot-Gadget/",
    },

    {
      id: "06",
      img: "" + pandaCommerce,
      title: "Panda Commerce",
      description: "A Front End Panda Commerce Website.",
      gitHub: "https://github.com/MinhajSadik/Panda-E-commerce-Bootstrap",
      liveLink:
        "https://minhajsadik.github.io/Panda-E-commerce-Bootstrap/Index.html",
    },

    {
      id: "07",
      img: "" + Team,
      title: "Football Team Selectors",
      description:
        "A React-Router Football Leauge Team Selector Under Router Websites.",
      gitHub: "https://github.com/MinhajSadik/Football-League-Router",
      liveLink: "https://football-league-router.netlify.app/",
    },
    {
      id: "04",
      img: "" + Urban,
      title: "Urban Riders",
      description: "A Dynamic And Fully Authorized Website.",
      gitHub: "https://github.com/MinhajSadik/React-Urban-Riders",
      liveLink: "https://google-authorization-urban-riders.netlify.app/",
    },
  ];
  return (
    <div id="project-section" className="container skill">
      <div className="back-line d-flex align-items-center skill-title">
        <div className="front-box d-flex align-items-center">
          <p className="d-flex align-items-center">Projects</p>
        </div>
      </div>

      <div className="row">
        {allProjects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
