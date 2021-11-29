import React from 'react';
import Typical from 'react-typical';
import './Home.css';
import profile from '../../../images/profile.png';
import ContactMe from '../ContactMe/ContactMe';
const Home = () => {
    return (
        <div>
            <div className="home-container">
            <div className="home-parent">
                <div className="details">
                <div className="column">
                    <div className="column-icon ">
                    <a className="p-1" href="https://www.facebook.com/profile.php?id=100008694737634">
                    <i class="fab fa-facebook-square"></i>
                    </a>
                    <a className="p-1" href="https://www.linkedin.com/in/shahid-monowar-/">
                    <i class="fab fa-linkedin"></i>
                    </a>
                    <a className="p-1" href="https://github.com/shahidmonowarr">
                    <i class="fab fa-github"></i>
                    </a>
                    </div>
                </div>
                
                <div className="details-name">
                    <span className="primary-text">
                        {""}
                        Hello, I'm <span className="highlighted-text">Md. Shahid Monowar</span>
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
                    <button className="btn primary-btn">Hire Me</button>
                    
                    <a href="FinalResume.pdf" download="Final Resume.pdf"><button className="btn primary-btn">Get Resume</button></a>
                </div>
                </div> 
                <div>
                    <div className="profile-picture">
                        <img src={profile} alt="" />
                    </div>
                    </div>   
            </div>

            
        </div>
        <ContactMe></ContactMe>
        </div>
    );
};

export default Home;