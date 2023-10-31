import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const { id, title, image, content, author, published_at } = blog;

  return (
    <Col className="my-2" sm={12} md={6} lg={4}>
      <Card data-aos="fade-up" className="bg-dark h-90 p-2">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "100% auto",
            height: "200px",
            width: "100%",
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            transition: "background-position 5s ease-in-out",
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title text-light">{title}</h5>
          <div className="d-flex justify-content-between my-3">
            <div className="text-info me-5  text-decoration-none">{author}</div>
            <div className="text-info ms-5  text-decoration-none">
              {published_at}
            </div>
          </div>
          <p className="text-secondary">{content.slice(0, 90)}...</p>
          <Link to={`/blogDetails/${id}`}>
            <button className="btn primary-btn">Read More</button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default SingleBlog;
