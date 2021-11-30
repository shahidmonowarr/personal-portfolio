import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import Header from '../../Shared/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Pharma.css'

const Pharma = () => {
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
                                    src="https://i.ibb.co/JcW8rSV/medipharma-health-care-services.png"
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
                                    src="https://i.ibb.co/grHpymX/medipharma-health-care-Blog.png"
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
                                    src="https://i.ibb.co/SxbLNLM/medipharma-health-care-questions.png"
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
                                <a target="_blank" href="https://medipharma-health-care.web.app/">
                                    <button className="desBtn btn me-2 btn-sm">Live site</button>
                                </a>
                                <a target="_blank" href="https://github.com/shahidmonowarr/Medi-pharma">
                                    <button className="desBtn btn me-2 btn-sm">
                                        Github code
                                    </button>
                                </a>
                                <div className="description mt-4">
                                    <h4 >Description</h4>
                                    <p>
                                        <i class="far fa-dot-circle"></i> Medi Pharma is a responsive e-medicine website.
                                    </p>
                                    <p>
                                        <i class="far fa-dot-circle"></i> Users can find their medicine, vaccine, medical consultation, and doctor receipt from this
                                        website.
                                    </p>
                                    <p>
                                        <i class="far fa-dot-circle"></i> The main features of Medi Pharma are firebase email password and google login
                                        authentication.
                                    </p>
                                </div>
                                <div className="technology">
                                    <h4 >
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
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pharma;