import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Minhaj from "../../images/minhaj.jpg";
import CV from "../../images/resume.pdf";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
          <h3
            style={{
              marginRightt: "100%",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            Hello👋 I'M [MINHAJ SADIK]
          </h3>
          <a href={CV} download="Resume">
            <button className="btn btn-success my-2 my-sm-0 btn-style">
              Get Resume
            </button>
          </a>
          <Link to="/skill">
            <button className="btn btn-outline-success my-2 my-sm-0 btn-style">
              My Skill
            </button>
          </Link>
        </div>
        <div data-aos="flip-up" className="col-md-6 about-mySelf">
          <h3>
            Hello! 👋 I'm Minhaj Sadik, a passionate software engineer. I
            develop web applications, mobile applications, and desktop
            applications. My core skill is based on JavaScript and I love to do
            most of the things using JavaScript. I love to make the web more
            open to the world. I am a undergraduate with a bachelor's degree in
            Computer Science Engineering from Leading University at Sylhet,
            Bangladesh in 2023. I am available for any kind of job opportunity
            that suits my interests.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
