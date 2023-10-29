import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Typical from "react-typical";
import "../Projects/Projects.css";
import SingleBlog from "./SingleBlog";

const Projects = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    fetch("/blogsdb.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="project-section" id="blogs">
      <div className="container p-4">
        <h1 className="d-flex justify-content-center pt-5 pb-5 fw-bold text-white">
          My&nbsp;{" "}
          <Typical
            loop={Infinity}
            steps={["Blogs", 2000, "Blogs", 2000, "Blogs", 2000]}
          ></Typical>
        </h1>
        <Row className="">
          {blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog}></SingleBlog>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
