import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './Bike.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../../Shared/Header/Header';

const Bike = () => {
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
                    <Col xs={12} md={6} lg={5} style={{ padding: "0 40px 30px 40px" }}>
                        <h3 style={{ color: "#2c3e50", fontWeight: "bold" }}>
                            Screenshots
                        </h3>
                        <Slider {...settings}>
                            <div>
                                <img
                                    style={{
                                        width: "100%",
                                        border: "2px solid #e67e22",
                                    }}
                                    src="https://i.ibb.co/LkBC4Y1/bike-store-cover.png"
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
                                    src="https://i.ibb.co/fD7WSf5/bike-store-bikes.png "
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
                                    src="https://i.ibb.co/Jd1GcRx/bike-store-customer-review.png"
                                    alt=""
                                />
                            </div>
                        </Slider>
                    </Col>
                    <Col xs={12} md={6} lg={7}>
                        <div className="project-details">
                            <h3 style={{ color: "#2c3e50", fontWeight: "bold" }}>Overview</h3>
                            <div style={{ marginBottom: "20px" }}>
                            </div>
                            <div className="details">
                                <a target="_blank" href="https://bike-store-fdfe8.web.app/">
                                    <button className="desBtn btn me-2 btn-sm">Live site</button>
                                </a>
                                <a target="_blank" href="https://github.com/shahidmonowarr/Bike-store-website-client-side">
                                    <button className="desBtn btn me-2 btn-sm">
                                        Client code
                                    </button>
                                </a>
                                <div className="description mt-4">
                                    <h4 style={{ color: "#2c3e50" }}>Description</h4>
                                    <p>
                                        <i class="far fa-dot-circle"></i> Bike Zone is a full-stack and responsive website for bike lovers.
                                    </p>
                                    <p>
                                        <i class="far fa-dot-circle"></i> Users can order different types of bikes and also can see detailed info on bikes from the
                                        website.
                                    </p>
                                    <p>
                                        <i class="far fa-dot-circle"></i> The dashboard is available for both the User and Admin. Users can see their own order list and
                                        also can cancel an order. Admin can add an admin, manage product delete or update and can
                                        confirm an order.
                                    </p>
                                </div>
                                <div className="technology">
                                    <h4 style={{ color: "#2c3e50", marginBottom: "15px" }}>
                                        Technology
                                    </h4><button className="techBtn btn">
                                        HTML5
                                    </button>
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
                                        React js
                                    </button>
                                    <button className="techBtn btn">
                                        Context API
                                    </button>
                                    <button className="techBtn btn">
                                        MongoDB
                                    </button>
                                    <button className="techBtn btn">
                                        Node js
                                    </button>
                                    <button className="techBtn btn">
                                        Express js
                                    </button>
                                    <button className="techBtn btn">
                                        Heroku
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

export default Bike;