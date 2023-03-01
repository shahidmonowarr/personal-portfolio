import Aos from 'aos';
import React, { useEffect } from 'react';
import Typical from 'react-typical';
import DIULogo from '../../images/diu.png';
import './Education.css';

const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div>
            <div className="project-section" id="project">
            <div className="container p-4">
            <h1 className='d-flex justify-content-center pt-5 pb-5 fw-bold text-white'>My&nbsp;  <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Education",
                                            2000,
                                            "Education",
                                            2000,
                                            "Education",
                                            2000,
                                        ]}
                                    ></Typical></h1>
        <div data-aos="fade-right">
          <div className="education-card">
            <div className="education-card-left">
              <img
                className="education-roundedimg"
                src={DIULogo}
                alt=""
              />
            </div>
            <div className="education-card-right">
              <h5 className="education-text-school">Daffodil International University</h5>
  
              <div className="education-text-details">
                <h5
                  className= "education-text-subHeader"
                >
                  Bsc in Computer Science and Engineering
                </h5>
                <p
                  className="education-text-duration"
                >
                  from 2019 to 2022
                </p>
                <p className="education-text-desc">Daffodil International University (DIU) is a recognized private university in Bangladesh</p>
                <div className="education-text-bullets">
                  <ul>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="education-card-border"></div>
        </div>
        </div>
        </div>
      </div>
    );
};

export default Education;