/* eslint-disable jsx-a11y/iframe-has-title */
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Minhaj from "../../images/minhaj.jpg";
import CV from "../../images/resume.pdf";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // const alignCenter = { display: "flex", alignItems: "center" };

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
            Hello! 👋 I'm [Minhaj Sadik], a passionate Software Engineer, i can
            develop web applications, mobile applications, and desktop
            applications. I can design & build any complex software, website. I
            can handle Algorithms & Data-Structure for better performance and
            every time I write efficient Code for readability. my core skill is
            based on JavaScript and I love to do most of the things using
            JavaScript. I am available for any kind of job opportunity that
            suits my interests.
          </h3>
          {/* <div>
            <div className={styles.background} />

            <Parallax pages={5}>
              <ParallaxLayer
                offset={0}
                speed={0.5}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <p className={styles.scrollText}>Name: Minhaj Sadik</p>
              </ParallaxLayer>

              <ParallaxLayer
                sticky={{ start: 2, end: 3 }}
                style={{ ...alignCenter, justifyContent: "flex-start" }}
              >
                <div className={`${styles.card} ${styles.sticky}`}>
                  <p>Software Enginner</p>
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.5}
                speed={1.5}
                style={{ ...alignCenter, justifyContent: "flex-end" }}
              >
                <div
                  className={`${styles.card} ${styles.parallax} ${styles.purple}`}
                >
                  <p>Front-End</p>
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                offset={2.5}
                speed={1.5}
                style={{ ...alignCenter, justifyContent: "flex-end" }}
              >
                <div
                  className={`${styles.card} ${styles.parallax} ${styles.blue}`}
                >
                  <p>Back-End</p>
                </div>
              </ParallaxLayer>
            </Parallax>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
