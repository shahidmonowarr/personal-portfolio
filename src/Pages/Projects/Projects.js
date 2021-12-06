import React, { useEffect } from 'react';
import './Projects.css'
import bike from '../../images/React App - bike-store-fdfe8.web.png'
import medical from '../../images/React App - medipharma-health-care.web.png'
import travel from '../../images/React App - travel-booking-website-b1db8.web.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className="project-section" id="project">
            <div className="container p-4">
                <h1 className="p-5 text-center text-white">My Projects</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col ">
                        <div data-aos="fade-up" className="card bg-secondary h-100 p-2">
                            <img src={bike} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-light">Bike Shop</h5>
                                <p className="card-text text-light">Bike Zone is a full-stack and responsive website for bike lovers.</p>
                                <hr />
                                <a target="_blank" className="text-info text-decoration-none" href="https://github.com/shahidmonowarr/Bike-store-website-client-side">
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
                        <div data-aos="zoom-in" className="card h-100 bg-secondary p-2">
                            <img src={travel} className="card-img-top" alt="" />
                            <div className="card-body ">
                                <h5 className="card-title text-light">Travel Booking</h5>
                                <p className="card-text text-light">Travel Mate is a full-stack and responsive travel booking site for travelers.</p>
                                <hr />
                                <a target=" _blank" className="text-info text-decoration-none" href="https://github.com/shahidmonowarr/Travel-booking-website-client-side">
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
                        <div data-aos="fade-down" className="card bg-secondary h-100 p-2">
                            <img src={medical} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-light">Medi Pharma</h5>
                                <p className="card-text text-light">Medi Pharma is a responsive e-medicine website.</p>
                                <hr />
                                <a target="_blank" className="text-info text-decoration-none" href="https://github.com/shahidmonowarr/Medi-pharma">
                                    <span ><i class="fab fa-github profile-icon"></i>Github</span>
                                </a>
                                <a target="_blank" className="ps-2 text-info text-decoration-none" href="https://medipharma-health-care.web.app/">
                                    <span ><i class="fab fa-github profile-icon"></i>Live Site</span>
                                </a>
                                <hr />
                                <Link to='/pharma'>
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