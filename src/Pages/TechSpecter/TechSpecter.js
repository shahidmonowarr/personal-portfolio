import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import Header from '../../Shared/Header/Header';

const TechSpecter = () => {
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
            <Container className="text-white pt-5">
                <Row>
                    <Col xs={12} md={6} lg={5} style={{ padding: "0 40px 30px 40px" }}>
                        <h3 >
                            Screenshots
                        </h3>
                        <Slider {...settings}>
                            <div>
                                <img
                                    style={{
                                        width: "100%",
                                        border: "2px solid #e67e22",
                                    }}
                                    src="https://i.ibb.co/n7kG7T2/dashboard.jpg"
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
                                    src="https://i.ibb.co/XSKKYDk/courses.jpg"
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
                                    src="https://i.ibb.co/q7dbBFT/travels.jpg"
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
                                    src="https://i.ibb.co/nmGxM6q/blogs.jpg"
                                    alt=""
                                />
                            </div>
                        </Slider>
                    </Col>
                    <Col xs={12} md={6} lg={7}>
                        <div className="project-details">
                            <h3>Overview</h3>
                            <div style={{ marginBottom: "20px" }}>
                            </div>
                            <div className="details">
                                <a target="_blank" href="https://agency-97aa4.web.app/" rel="noreferrer">
                                    <button className="desBtn btn me-2 btn-sm">Live site</button>
                                </a>
                                <a target="_blank" href="https://github.com/shahidmonowarr/tech-specter-client" rel="noreferrer">
                                    <button className="desBtn btn me-2 btn-sm">
                                        Client code
                                    </button>
                                </a>
                                <a target="_blank" href="https://github.com/shahidmonowarr/tech-specter-server" rel="noreferrer">
                                    <button className="desBtn btn me-2 btn-sm">
                                        Server code
                                    </button>
                                </a>
                                <div className="description mt-4">
                                    <h4 style={{ color: "#2c3e50" }}>Description</h4>
                                    <p>
                                        <i className="far fa-dot-circle"></i> Tech Specter is an Organization Management Full Stack and responsive website.
                                    </p>
                                    <p>
                                        <i className="far fa-dot-circle"></i> Users can purchase different types of courses, can booked travel, can read different
types of blogs also can request donors for blood.
                                    </p>
                                    <p>
                                        <i className="far fa-dot-circle"></i> Dashboard is available for both user and admin.
                                    </p>
                                    <p>
                                        <i className="far fa-dot-circle"></i> Payment method is included. Users can view and delete their purchases or bookings
and can add reviews. Admin can add an admin, delete or update services, and approve
orders.
                                    </p>
                                </div>
                                <div className="technology">
                                    <h4 style={{ color: "#2c3e50", marginBottom: "15px" }}>
                                        Technology
                                    </h4>
                                    <button className="techBtn btn">
                                        CSS3
                                    </button>
                                    <button className="techBtn btn">
                                        Bootstrap-5
                                    </button>
                                    <button className="techBtn btn">
                                        Firebase
                                    </button>
                                    <button className="techBtn btn">
                                        React JS
                                    </button>
                                    <button className="techBtn btn">
                                        Context API
                                    </button>
                                    <button className="techBtn btn">
                                        JWT token
                                    </button>
                                    <button className="techBtn btn">
                                        Node JS
                                    </button>
                                    <button className="techBtn btn">
                                        Express JS
                                    </button>
                                    
                                    <button className="techBtn btn">
                                        MongoDB
                                    </button>
                                    <button className="techBtn btn">
                                        OnRender
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TechSpecter;