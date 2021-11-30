import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import Header from '../../Shared/Header/Header';

const Travel = () => {
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
                                    src="https://i.ibb.co/h2ZcTCz/travel-booking-website-header.png"
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
                                    src="https://i.ibb.co/dBbrZM6/travel-booking-website-offer.png"
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
                                    src="https://i.ibb.co/C9s38dx/travel-booking-website-packages.png"
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
                                <a target="_blank" href="https://travel-booking-website-b1db8.web.app/">
                                    <button className="desBtn btn me-2 btn-sm">Live site</button>
                                </a>
                                <a target="_blank" href="https://github.com/shahidmonowarr/Travel-booking-website-client-side">
                                    <button className="desBtn btn me-2 btn-sm">
                                        Client code
                                    </button>
                                </a>
                                <div className="description mt-4">
                                    <h4 style={{ color: "#2c3e50" }}>Description</h4>
                                    <p>
                                        <i class="far fa-dot-circle"></i> Travel Mate is a full-stack and responsive travel booking site for travelers.
                                    </p>
                                    <p>
                                        <i class="far fa-dot-circle"></i> Users can check their desired travel location, cost of the package and can book their particular
                                        package from this website.
                                    </p>
                                    <p>
                                        <i class="far fa-dot-circle"></i> The authentication system of Travel Mate is firebase google login authentication.
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


export default Travel;