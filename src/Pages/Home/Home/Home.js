import React, { useEffect } from 'react';
import Typical from 'react-typical';
import './Home.css';
import profile from '../../../images/profile.png';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../../Projects/Projects';
import Header from '../../../Shared/Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from '../../Skills/Skills';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    

    return (
        <div className="project-section" id="home">
            <Header></Header>
            <div className="home-container">
                <div className="home-parent">
                    <div data-aos="fade-down-right" className="details">
                        <div className="column">
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

                        <div className="details-name">
                            <span className="primary-text fs-3">
                                {""}
                                Hi, I'm <span className="text-danger ">Md. Shahid Monowar</span>
                            </span>
                        </div>
                        <div className="details-role">
                            <span className="primary-text">
                                <h1>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Front End Developer",
                                            2000,
                                            "Full Stack Developer",
                                            2000,
                                            "MERN Stack Developer",
                                            2000,
                                            "React Developer",
                                            2000,
                                        ]}
                                    ></Typical>
                                </h1>
                                <span className="tagline">
                                    Let me know if need to build applications with MERN Stack.
                                </span>
                            </span>
                        </div>
                        <div className="options">
                            <button className="btn primary-btn me-3">Hire Me</button>

                            <a target="_blank" href="https://drive.google.com/file/d/1vp6U5XNzyEoZW317hAaOYe6fK4Bhx1lP/view" download="Final Resume.pdf"><button className="btn primary-btn">Get Resume</button></a>
                        </div>
                    </div>
                    <div>
                        <div data-aos="fade-down-left" className="profile-picture">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Projects></Projects>
            <Skills></Skills>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;