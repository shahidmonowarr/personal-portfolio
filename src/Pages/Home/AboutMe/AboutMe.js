import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import profile from '../../../images/profile.png';

const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div className='about-section' id='about'>
            <div className='container p-5'>
                <h1 class='d-flex justify-content-center pt-5 pb-2 text-white'>About Me</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div data-aos="fade-right" className="col-lg-6 d-flex justify-content-center">
                        <img width='50%' src={profile} alt="" />
                    </div>
                    <div data-aos="flip-down"
                        className="col-lg-6 d-flex justify-content-center">
                        <div>
                            <p class="fs-5 text-white">I'm Md. Shahid Monowar, a front-end web developer. I am proficient with HTML5, CSS3, Bootstrap, ES6, JavaScript, React JS, and also server-side node.js, express.js, MongoDB. As a developer, I love taking challenges and love being part of the solution.
                            </p>
                            <div className="options"><a href="FinalResume.pdf" download="Final Resume.pdf"><button className="btn primary-btn">Get Resume</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;