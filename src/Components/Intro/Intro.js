import { AiFillLinkedin, AiFillYoutube, AiOutlineMedium } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import CV from "../../images/resume.pdf";
import "./Intro.css";
// import Particles from 'react-particles-js';

const Intro = () => {
  return (
    <div className="container intro">
      <div id="intro-section" className="col-md-12">
        <h4 className="hello">Hello! 👋 I'm</h4>
        <h1 className="name-color">[Minhaj Sadik]</h1>
        <br />
        <br />
        <h2 className="font-weight-bolder text-white developer">
          <Typical
            steps={[" little programmer", 3000, " clever learner", 3000]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <br />
        <br />
        <br />
        <br />
        <a href={CV} download="MinhajSadik_Resume">
          <button className="btn btn-success my-2 my-sm-0 btn-style">
            Get Resume
          </button>
        </a>
        <Link to="/about">
          <button className="btn btn-outline-success my-2 my-sm-0 btn-style">
            About Me
          </button>
        </Link>
        <br />
        <br />
        <br />
        <div className="back-line d-flex align-items-center">
          <div className="front-box d-flex align-items-center">
            <p className="d-flex align-items-center">Follow Me</p>
          </div>
        </div>
        <div className="icon">
          <a
            className="icon2"
            href="https://github.com/MinhajSadik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            className="icon2"
            href="https://www.linkedin.com/in/MinhajSadik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="icon2"
            href="https://medium.com/@minhajsadik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMedium />
          </a>
          <a
            className="icon2"
            href="https://www.youtube.com/channel/UC6I0U9NjTTQQGpKI73_mNXQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
