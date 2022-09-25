import Appointment_Booking from "../../images/projectImage/appointment_booking.png";
import Blog_Website from "../../images/projectImage/blog_website.png";
import Clever_Learner from "../../images/projectImage/clever_learner_quiz.png";
import Feature_Request from "../../images/projectImage/feature_request.png";
import Product_Hunt from "../../images/projectImage/product_hunt.png";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const allProjects = [
    {
      id: "01",
      img: "" + Appointment_Booking,
      title: "Appointment Booking System",
      description:
        "A Full Stack Appointment Bookink System for University student, teacher and administration",
      gitHub: "https://github.com/MinhajSadik/Appointment_System",
      liveLink: "https://appointment-system.netlify.app",
    },
    {
      id: "02",
      img: "" + Clever_Learner,
      title: "Clever Learner",
      description:
        "Clever Learner is an quiz app, there are multi types of quizzes",
      gitHub: "https://github.com/MinhajSadik/Clever_Learner",
      liveLink: "https://clever-learner-quiz.netlify.app",
    },

    {
      id: "03",
      img: "" + Feature_Request,
      title: "Feature Request",
      description:
        "Feature Request is an product or apps features request from user and client.",
      gitHub: "https://github.com/MinhajSadik/Feature_Request",
      liveLink: "https://feature-request.netlify.app/",
    },
    {
      id: "05",
      img: "" + Blog_Website,
      title: "Blog Website",
      description:
        "Simple Blog website, there you can create blog and you can comment in single blog also can reply each blog",
      gitHub: "https://github.com/MinhajSadik/Blog_Website_FullStack",
      liveLink: "https://blogs-website-client.netlify.app",
    },

    {
      id: "06",
      img: "" + Product_Hunt,
      title: "Product Hunt",
      description:
        "Product Hunt is an product based well organized website, there have products and so many features you can see",
      gitHub: "https://github.com/MinhajSadik/Product_Hunt_FullStack",
      liveLink: "https://product-hunt-fullstack.netlify.app",
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
