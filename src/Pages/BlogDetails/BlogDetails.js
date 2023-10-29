import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from "../../Shared/Header/Header";
import "../ProjectDetails/ProjectDetails.css";

hljs.registerLanguage("javascript", javascript);

const BlogDetails = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { blogId } = useParams();
  console.log("blogId", blogId);
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const codeRef = useRef(null);

  useEffect(() => {
    fetch("/blogsdb.json")
      .then((res) => res.json())
      .then((data) => {
        const blog = data.find((blog) => blog.id === blogId);
        setBlog(blog);
        setLoading(false);
      });
  }, [blogId]);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <div className="details-section">
      <Header></Header>
      <Container className="text-white pt-5">
        <Row>
          <Col xs={12} md={6} lg={6} style={{ padding: "0 40px 30px 40px" }}>
            <h3>{blog?.title}</h3>
            <Slider {...settings}>
              {blog?.image && (
                <div>
                  <img
                    style={{
                      width: "100%",
                      border: "2px solid #e67e22",
                      margin: "15px 0",
                    }}
                    src={blog?.image}
                    alt=""
                  />
                </div>
              )}
            </Slider>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="blog-details">
              <h3>Overview</h3>
              <div style={{ marginBottom: "20px" }}></div>
              <div className="details">
                <div className="description mt-4">
                  <h4 className="text-secondary">Details:</h4>
                  <p>
                    <i className="far fa-dot-circle"></i> {blog?.content}
                  </p>
                  <p>
                    <i className="far fa-dot-circle"></i>
                    {blog?.content2}
                  </p>
                  <p>
                    <i className="far fa-dot-circle"></i>
                    Example:{" "}
                  </p>
                  <pre>
                    <p>
                      <code
                        className="javascript"
                        ref={codeRef}
                        style={{ background: "black" }}
                      >
                        {blog?.code1}
                      </code>
                    </p>
                  </pre>
                  <p>
                    <i className="far fa-dot-circle"></i>
                    Explanation: {blog?.explain1}
                  </p>
                  {blog?.explain2 && (
                    <p>
                      <i className="far fa-dot-circle"></i>
                      {blog?.explain2}
                    </p>
                  )}
                  {blog?.content4 && (
                    <p>
                      <i className="far fa-dot-circle"></i>
                      {blog?.content4}
                    </p>
                  )}
                  {blog?.content5 && (
                    <p>
                      <i className="far fa-dot-circle"></i>
                      {blog?.content5}
                    </p>
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

export default BlogDetails;
