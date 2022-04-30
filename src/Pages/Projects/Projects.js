import React, { useEffect } from 'react';
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className="project-section" id="project">
            <div className="container p-4">
            <h1 class='d-flex justify-content-center pt-5 pb-5 fw-bold text-white'>My&nbsp;  <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Projects",
                                            2000,
                                            "Projects",
                                            2000,
                                            "Projects",
                                            2000,
                                        ]}
                                    ></Typical></h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col ">
                        <div data-aos="fade-up" className="card bg-dark h-100 p-2">
                            <div className='box box1'></div>
                            <div className="card-body">
                                <h5 className="card-title text-light">Bike Shop</h5>
                                <p className="card-text text-light">Bike Zone is a full-stack and responsive website for bike lovers.</p>
                                <hr />
                                <a target="_blank" className="text-info pe-5  text-decoration-none" href="https://github.com/shahidmonowarr/Bike-store-website-client-side">
                                    <span ><i class="fab fa-github profile-icon"></i>Github</span>
                                </a>
                                <a target="_blank" className=" ps-2 text-info text-decoration-none" href="https://bike-store-fdfe8.web.app/">
                                    <span ><i class="fab fa-github profile-icon"></i>Live site</span>
                                </a>
                                <hr />
                                <Link to='/bike'>
                                    <button className='details-btn'>Details</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col ">
                        <div data-aos="zoom-in" className="card h-100 bg-dark p-2">
                            <div className='box box2'></div>
                            <div className="card-body ">
                                <h5 className="card-title text-light">Travel Booking</h5>
                                <p className="card-text text-light">Travel Mate is a full-stack and responsive travel booking site for travelers.</p>
                                <hr />
                                <a target=" _blank" className="text-info pe-5  text-decoration-none" href="https://github.com/shahidmonowarr/Travel-booking-website-client-side">
                                    <span ><i class="fab fa-github profile-icon"></i>Github</span>
                                </a>
                                <a target=" _blank" className="ps-2 text-info text-decoration-none" href="https://travel-booking-website-b1db8.web.app/">
                                    <span ><i class="fab fa-github profile-icon"></i>Live Site</span>
                                </a>
                                <hr />
                                <Link to='/travel'>
                                    <button className='details-btn'>Details</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col ">
                        <div data-aos="fade-down" className="card bg-dark h-100 p-2">
                        <div className='box box3'></div>
                            <div className="card-body">
                                <h5 className="card-title text-light">Food Sense</h5>
                                <p className="card-text text-light">Food Sense is a full-stack and responsive website for Food lovers.</p>
                                <hr />
                                <a target="_blank" className="text-info pe-5 text-decoration-none" href="https://github.com/shahidmonowarr/Medi-pharma">
                                    <span ><i class="fab fa-github profile-icon"></i>Github</span>
                                </a>
                                <a target="_blank" className="ps-2 text-info text-decoration-none" href="https://medipharma-health-care.web.app/">
                                    <span ><i class="fab fa-github profile-icon"></i>Live Site</span>
                                </a>
                                <hr />
                                <Link to='/foodsense'>
                                    <button className='details-btn'>Details</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;