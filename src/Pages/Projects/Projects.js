import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Button, ButtonGroup, Container, Pagination, Row } from "react-bootstrap";
import Typical from "react-typical";
import "./Projects.css";
import SingleProject from "./SingleProject";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  

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

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentProjects = filteredProjects.slice(start, end);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          {currentProjects.map((project) => (
            <SingleProject key={project.id} project={project}></SingleProject>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <Pagination className="mt-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Projects;
