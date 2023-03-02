import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleProject = ({ project }) => {
  const { _id, name, photo, desc1, githubFrontend, live } = project;

  return (
    <Col className=" my-2" sm={12} md={6} lg={4}>
      <Card data-aos="fade-up" className="bg-dark h-90 p-2">
        <div
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: "100% auto",
            height: "250px",
            width: "100%",
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            transition: "background-position 5s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundPosition = "0% 100%";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundPosition = "0% 0%";
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title text-light">{name}</h5>
          <p className="text-light">{desc1}</p>
          <hr />
          <div className="d-flex justify-content-center">
            <a
              target="_blank"
              className="text-info me-5  text-decoration-none"
              href={githubFrontend}
              rel="noreferrer"
            >
              <span>
                {/* <i className="fab fa-github profile-icon"></i> */}
                Github
              </span>
            </a>
            <Link to={`/projectDetails/${_id}`}>
              <button className="details-btn me-4">Details</button>
            </Link>
            <a
              target="_blank"
              className=" ms-3 text-info text-decoration-none"
              href={live}
              rel="noreferrer"
            >
              <span>
                {/* <i className="fab fa-github profile-icon"></i> */}
                Live-site
              </span>
            </a>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default SingleProject;
