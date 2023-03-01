import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Typical from 'react-typical';
import aboutDP from '../../../images/shahid-bg3.png';
import "./About.css";

const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div className='about-section text-start' id='about'>
            <div className='container p-5'>
                <h1 className='d-flex justify-content-center pt-5 pb-5 fw-bold text-white'>About&nbsp;  <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Me",
                                            2000,
                                            "Me",
                                            2000,
                                            "Me",
                                            2000,
                                        ]}
                                    ></Typical></h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div data-aos="fade-right" className="col-lg-6 d-flex justify-content-center">
                        <img width='70%' src={aboutDP} alt="" />
                    </div>
                    <div data-aos="fade-left"
                        className="col-lg-6 d-flex text-center justify-content-center">
                        <div>
                            <p className="fs-5 text-white text-start">My name is Md. Shahid Monowar, I'm 22 years old, I live in Dhaka.  I am currently studying at Daffodil International University. I've also been studying a lot on my own to learn ne technologies and skills. <br></br><br></br> I started as a front-end web developer in 2021. I am proficient with HTML5, CSS3, Bootstrap, MUI, Tailwind CSS, Daisy UI ES6, JavaScript, React JS, and also NodeJS, ExpressJS, MongoDB, JWT. As a developer, I love taking challenges and love being part of the solution.
                            </p>
                            
                            <div className='text-start my-2'>
                                <a className="p-1 fs-4 text-white" href="https://www.facebook.com/profile.php?id=100008694737634">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://www.linkedin.com/in/shahid-monowar-/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://github.com/shahidmonowarr">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://t.me/shahidmonowar">
                                    <i className="fab fa-telegram"></i>
                                </a>
                                <a className="p-1 fs-4 text-white" href="https://twitter.com/ShahidMonowar">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="text-start ms-0"><a target="_blank" href="https://drive.google.com/file/d/1vp6U5XNzyEoZW317hAaOYe6fK4Bhx1lP/view" download="Final Resume.pdf" rel="noreferrer"><button className="btn primary-btn">Get Resume</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;