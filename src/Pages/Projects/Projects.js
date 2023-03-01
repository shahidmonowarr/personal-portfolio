import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import Typical from "react-typical";
import "./Projects.css";
import SingleProject from "./SingleProject";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const count = projects.length;
  

  useEffect(() => {
    fetch("/fakedb.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const filterProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="project-section" id="project">
      <div className="container p-4">
        <h1 className="d-flex justify-content-center pt-5 pb-5 fw-bold text-white">
          My&nbsp;{" "}
          <Typical
            loop={Infinity}
            steps={["Projects", 2000, "Projects", 2000, "Projects", 2000]}
          ></Typical>
        </h1>
        <Container className="mx-auto text-center">
          <ButtonGroup className="flex-wrap" aria-label="Basic example">
            <Button
              className="mx-2 my-2 rounded-3"
              variant="secondary"
              onClick={() => handleCategorySelect(null)}
            >
              All
            </Button>
            <Button
              className="mx-2 my-2 rounded-3"
              variant="secondary"
              onClick={() => handleCategorySelect("MERN Stack")}
            >
              MERN Stack
            </Button>
            <Button
              className="mx-2 my-2 rounded-3"
              variant="secondary"
              onClick={() => handleCategorySelect("React.js")}
            >
              React.js
            </Button>
            <Button
              className="mx-2 my-2 rounded-3"
              variant="secondary"
              onClick={() => handleCategorySelect("JavaScript")}
            >
              JavaScript
            </Button>
            <Button
              className="mx-2 my-2 rounded-3"
              variant="secondary"
              onClick={() => handleCategorySelect("Rest API")}
            >
              Rest API
            </Button>
            <Button
              className="mx-2 my-2 rounded-3"
              variant="secondary"
              onClick={() => handleCategorySelect("Static")}
            >
              Static
            </Button>
          </ButtonGroup>
        </Container>
        <Row className="">
          {filterProjects.map((project) => (
            <SingleProject key={project.id} project={project}></SingleProject>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
