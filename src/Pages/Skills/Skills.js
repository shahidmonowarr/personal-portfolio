import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="my-skills">
            <Container>
                <div className="px-2 text-center">
                    <h1 className="fs2 mt-5 mb-2 text-white bold ">My Skills!</h1>
                    <p className="text-white">
                        I am expertise on web development in this skills.
                    </p>
                </div>
                <Row className="px-2 skills">
                    <Col data-aos="fade-right" xs={12} md={12} lg={6} className="pe-5 first-col">
                        <div className="my-progress">
                            <h5 className="text-white">Html</h5>
                            <ProgressBar animated now={80} label={`${80}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">Css</h5>
                            <ProgressBar animated now={70} label={`${70}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">Bootstrap</h5>
                            <ProgressBar animated now={85} label={`${85}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">JavaScript</h5>
                            <ProgressBar animated now={80} label={`${80}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">React Js</h5>
                            <ProgressBar animated now={75} label={`${75}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">React-Bootstrap</h5>
                            <ProgressBar animated now={70} label={`${70}%`} />
                        </div>
                    </Col>
                    <Col data-aos="fade-left" xs={12} md={12} lg={6} className="ps-5 second-col">
                        <div className="my-progress">
                            <h5 className="text-white">Material UI</h5>
                            <ProgressBar animated now={70} label={`${70}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">Tailwind CSS</h5>
                            <ProgressBar animated now={60} label={`${60}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">Firebase</h5>
                            <ProgressBar animated now={60} label={`${60}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">Node Js</h5>
                            <ProgressBar animated now={55} label={`${55}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">Express Js</h5>
                            <ProgressBar animated now={70} label={`${70}%`} />
                        </div>
                        <div className="my-progress">
                            <h5 className="text-white">MongoDB</h5>
                            <ProgressBar animated now={90} label={`${90}%`} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;