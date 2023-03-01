import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Header from "../../Shared/Header/Header";

const MobilePanda = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
  };
  return (
    <div className="details-section">
      <Header></Header>
      <Container className="text-white  pt-5">
        <Row>
          <Col xs={12} md={8} lg={7} style={{ padding: "0 40px 30px 40px" }}>
            <h3>Screenshots</h3>
            <Slider {...settings}>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    height: "100%",
                  }}
                  src="https://i.ibb.co/cymbRbT/admin-dashboard-mobile-panda-web-app.png
                                    "
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    margin: "15px 0",
                  }}
                  src="https://i.ibb.co/c2jCw2w/admin-dashboard2-mobile-panda-web-app.png
                                    "
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    margin: "15px 0",
                  }}
                  src="https://i.ibb.co/mDjQh4f/contact-form-mobile-panda-web-app.png
                                    "
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    margin: "15px 0",
                  }}
                  src="https://i.ibb.co/WHjzjLv/user-dashboard-mobile-panda-web-app.png
                                    
                                    "
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    border: "2px solid #e67e22",
                    margin: "15px 0",
                  }}
                  src="https://i.ibb.co/sPqR0Qt/user-dashboard-mobile-panda-web-app.png
                                    "
                  alt=""
                />
              </div>
            </Slider>
          </Col>
          <Col xs={12} md={4} lg={5}>
            <div className="project-details">
              <h3>Overview</h3>
              <div style={{ marginBottom: "20px" }}></div>
              <div className="details">
                <a
                  target="_blank"
                  href="https://mobile-panda.web.app/"
                  rel="noreferrer"
                >
                  <button className="desBtn btn me-2 btn-sm">Live site</button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/shahidmonowarr/mobile-panda-frontend"
                  rel="noreferrer"
                >
                  <button className="desBtn btn me-2 btn-sm">
                    Github code
                  </button>
                </a>
                <div className="description mt-4">
                  <h4>Description</h4>
                  <p>
                    <i className="far fa-dot-circle"></i> Users can view and
                    purchase different type of Mobiles.
                  </p>
                  <p>
                    <i className="far fa-dot-circle"></i> Dashboard is available for
                    both user and admin.
                  </p>
                  <p>
                    <i className="far fa-dot-circle"></i> User can view and delete
                    their purchases and can add reviews.
                  </p>
                  <p>
                    <i className="far fa-dot-circle"></i> Admin can add an admin,
                    delete or update services and can approve order.
                  </p>
                </div>
                <div className="technology">
                  <h4>Technology</h4>
                  <button className="techBtn btn">React JS</button>
                  <button className="techBtn btn">CSS3</button>
                  <button className="techBtn btn">Material UI</button>
                  <button className="techBtn btn">Firebase</button>
                  <button className="techBtn btn">JWT-token</button>
                  <button className="techBtn btn">MongoDB</button>
                  <button className="techBtn btn">Node JS</button>
                  <button className="techBtn btn">Express JS</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobilePanda;
