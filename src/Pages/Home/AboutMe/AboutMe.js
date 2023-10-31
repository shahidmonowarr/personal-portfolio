import {
  faHeadset,
  faLaptopCode,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Typical from "react-typical";
import aboutDP from "../../../images/shahid-bg3.png";
import "./About.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="about-section text-start" id="about">
      <div className="container p-5">
        <h1 className="d-flex justify-content-center pt-5 pb-5 fw-bold text-white">
          About&nbsp;{" "}
          <Typical
            loop={Infinity}
            steps={["Me", 2000, "Me", 2000, "Me", 2000]}
          ></Typical>
        </h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div
            data-aos="fade-right"
            className="col-lg-6 d-flex justify-content-center"
          >
            <img width="100%" src={aboutDP} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="col-lg-6 d-flex text-center justify-content-center"
          >
            <div>
              <CardGroup className="gap-2">
                <Card className="border-dark rounded-3">
                  <Card.Body>
                    <h1 style={{ width: "100%" }}>
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </h1>
                    <Card.Title>Experience</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">1+ Years</small>
                  </Card.Footer>
                </Card>
                <Card className="border-dark rounded-3">
                  <Card.Body>
                    <h1 style={{ width: "100%" }}>
                      <FontAwesomeIcon icon={faTasks} />
                    </h1>
                    <Card.Title>Projects</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">15+ Completed</small>
                  </Card.Footer>
                </Card>
                <Card className="border-dark rounded-3">
                  <Card.Body>
                    <h1 style={{ width: "100%" }}>
                      <FontAwesomeIcon icon={faHeadset} />
                    </h1>
                    <Card.Title>Support</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Online 24/7</small>
                  </Card.Footer>
                </Card>
              </CardGroup>
              <p className="fs-5 text-white text-start">
                MERN Stack Developer with 1+ years of experience in web
                development. I have worked on many projects and have a good
                understanding of the latest technologies. I am a quick learner
                and can adapt to new technologies quickly. I am a team player
                and can work well with others. I am also a good communicator and
                can work well with clients.
              </p>

              <div className="text-start my-2">
                <a
                  className="p-1 fs-4 text-white"
                  href="https://www.facebook.com/profile.php?id=100008694737634"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  className="p-1 fs-4 text-white"
                  href="https://www.linkedin.com/in/shahid-monowar-/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="p-1 fs-4 text-white"
                  href="https://github.com/shahidmonowarr"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="p-1 fs-4 text-white"
                  href="https://t.me/shahidmonowar"
                >
                  <i className="fab fa-telegram"></i>
                </a>
                <a
                  className="p-1 fs-4 text-white"
                  href="https://twitter.com/ShahidMonowar"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="text-start ms-0">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1vp6U5XNzyEoZW317hAaOYe6fK4Bhx1lP/view"
                  download="Final Resume.pdf"
                  rel="noreferrer"
                >
                  <button className="btn primary-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
