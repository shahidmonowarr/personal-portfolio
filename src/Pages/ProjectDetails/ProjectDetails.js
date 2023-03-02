import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from "../../Shared/Header/Header";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { projectId } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/fakedb.json")
      .then((res) => res.json())
      .then((data) => {
        const project = data.find((project) => project._id === projectId);
        setProject(project);
        setLoading(false);
      });
  }, [projectId]);

  return (
    <div className="details-section">
      <Header></Header>
      <Container className="text-white pt-5">
        <Row>
          <Col xs={12} md={6} lg={5} style={{ padding: "0 40px 30px 40px" }}>
            <h3>Screenshots</h3>
            <Slider {...settings}>
              {project.picture1 && (
                <div>
                  <img
                    style={{
                      width: "100%",
                      border: "2px solid #e67e22",
                    }}
                    src={project.picture1}
                    alt=""
                  />
                </div>
              )}
              {project.picture2 && (
                <div>
                  <img
                    style={{
                      width: "100%",
                      border: "2px solid #e67e22",
                      margin: "15px 0",
                    }}
                    src={project.picture2}
                    alt=""
                  />
                </div>
              )}
              {project.picture3 && (
                <div>
                  <img
                    style={{
                      width: "100%",
                      border: "2px solid #e67e22",
                      margin: "15px 0",
                    }}
                    src={project.picture3}
                    alt=""
                  />
                </div>
              )}
              {project.picture4 && (
                <div>
                  <img
                    style={{
                      width: "100%",
                      border: "2px solid #e67e22",
                      margin: "15px 0",
                    }}
                    src={project.picture4}
                    alt=""
                  />
                </div>
              )}
            </Slider>
          </Col>
          <Col xs={12} md={6} lg={7}>
            <div className="project-details">
              <h3>Overview</h3>
              <div style={{ marginBottom: "20px" }}></div>
              <div className="details">
                <a target="_blank" href={project.live} rel="noreferrer">
                  <button className="desBtn btn me-2 btn-sm">Live site</button>
                </a>
                <a
                  target="_blank"
                  href={project.githubFrontend}
                  rel="noreferrer"
                >
                  <button className="desBtn btn me-2 btn-sm">
                    Client code
                  </button>
                </a>
                {project.githubBackend && (
                    <a
                    target="_blank"
                    href={project.githubBackend}
                    rel="noreferrer"
                  >
                    <button className="desBtn btn me-2 btn-sm">
                      Server code
                    </button>
                  </a>
                  )}
                <div className="description mt-4">
                  <h4 style={{ color: "#2c3e50" }}>Description</h4>
                  <p>
                    <i className="far fa-dot-circle"></i> {project.desc1}
                  </p>
                  <p>
                    <i className="far fa-dot-circle"></i>
                    {project.desc2}
                  </p>
                  <p>
                    <i className="far fa-dot-circle"></i>
                    {project.desc3}
                  </p>
                  {project.desc4 && (
                    <p>
                    <i className="far fa-dot-circle"></i>
                    {project.desc4}
                  </p>
                  )}
                </div>
                <div className="technology">
                  <h4 style={{ color: "#2c3e50", marginBottom: "15px" }}>
                    Technology
                  </h4>
                  {project.tech1 && (
                    <button className="techBtn btn">{project.tech1}</button>
                  )}
                  {project.tech2 && (
                    <button className="techBtn btn">{project.tech2}</button>
                  )}
                  {project.tech3 && (
                    <button className="techBtn btn">{project.tech3}</button>
                  )}
                  {project.tech4 && (
                    <button className="techBtn btn">{project.tech4}</button>
                  )}
                    {project.tech5 && (
                    <button className="techBtn btn">{project.tech5}</button>
                    )}
                    {project.tech6 && (
                    <button className="techBtn btn">{project.tech6}</button>
                    )}
                    {project.tech7 && (
                    <button className="techBtn btn">{project.tech7}</button>
                    )}
                    {project.tech8 && (
                    <button className="techBtn btn">{project.tech8}</button>
                    )}
                    {project.tech9 && (
                    <button className="techBtn btn">{project.tech9}</button>
                    )}
                    {project.tech10 && (
                    <button className="techBtn btn">{project.tech10}</button>
                    )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetails;
