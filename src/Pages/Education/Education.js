import { faBriefcase, faCalendarAlt, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import React, { useEffect } from 'react';
import Typical from 'react-typical';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className='container'>
            <div className="project-section" id="project">
            <div className="container p-4">
            <h1 className='d-flex justify-content-center pt-5 pb-5 fw-bold text-white'>My&nbsp;  <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Education &",
                                            3000,
                                            "Experience",
                                            3000,
                                        ]}
                                    ></Typical></h1>
        </div>
        </div>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="2019 - 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap} />}
  >
    <h3 className="vertical-timeline-element-title">Daffodil International University</h3>
    <h4 className="vertical-timeline-element-subtitle">Dhaka, Bangladesh</h4>
    <p>
    BSc in Computer Science and Engineering
    <br />
    Grade Point Average: 3.70
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="March 03 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faCalendarAlt} />}
  >
    <h3 className="vertical-timeline-element-title">Event Management</h3>
    <h4 className="vertical-timeline-element-subtitle">Engineering Summit - 2023</h4>
    <p>
      Organized by Youth for Better Future(YBF) <br />
      Was responsible for the overall coordination of the event, including the  the venue, the speakers, the agenda, the volunteers, the attendees  and the marketing.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faStar} />}
  />
</VerticalTimeline>
      </div>
    );
};

export default Education;