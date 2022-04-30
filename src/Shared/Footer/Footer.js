import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className=" text-center"> <br /><br />
                                <h4 className="text-light fw-bold">SHAHID <span className="text-white">|</span> <span className="text-warning">PORT</span>Folio</h4>
                                <div className=""><hr />
                                    <div className="d-flex justify-content-center ">

                                    <div >
                                <a className="p-1 fs-4 text-white" href="https://www.facebook.com/profile.php?id=100008694737634">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://www.linkedin.com/in/shahid-monowar-/">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://github.com/shahidmonowarr">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://t.me/shahidmonowar">
                                    <i class="fab fa-telegram"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://twitter.com/ShahidMonowar">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* <div className="col-md-6 col-sm-6 text-center">
                            <div className="footer-menu-container pt-2">
                                <Nav.Link className="nav-link text-white fw-bold" as={Link} to="/">Home</Nav.Link>
                                <Nav.Link className="nav-link text-white fw-bold" href="#about">About</Nav.Link>
                                <Nav.Link className="nav-link text-white fw-bold" href="#project">Projects</Nav.Link>
                                <Nav.Link className="nav-link text-white fw-bold" href="#contact">Contact</Nav.Link>


                            </div>
                        </div> */}
                    </div>
                    <hr />
                    <p className="text-center text-secondary fs-6 fw-bold pb-3"><small>{"\u00a9"} 2022 all right reserved by Shahid{" "}</small>
        
      </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;