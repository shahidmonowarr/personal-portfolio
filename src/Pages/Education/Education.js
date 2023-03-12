import {
  faBriefcase,
  faCalendarAlt,
  faCode,
  faGraduationCap,
  faPlus,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import Typical from "react-typical";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const dataExamples = [
  {
    props: {
      date: "2023 - present",
      className: "vertical-timeline-element--work",
      contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    title: "InfiniteSoftBd",
    subtitle: "Dhaka, Bangladesh",
    content:
      "Co-Founder & Project Manager",
  },
  {
    props: {
      date: "2019 - 2022",
      className: "vertical-timeline-element--education",
      contentStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(233, 30, 99)" },
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
    },
    title: "Daffodil International University",
    subtitle: "Dhaka, Bangladesh",
    content: "BSc in Computer Science and Engineering with 3.70 GPA",
  },
  {
    props: {
      date: "March 03 - 2023",
      className: "vertical-timeline-element--work",
      contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      icon: <FontAwesomeIcon icon={faCalendarAlt} />,
    },
    title: "Event Management",
    subtitle: "Engineering Summit - 2023",
    content:
      " Organized by Youth for Better Future(YBF). Was responsible for the overall coordination of the event, including the the venue, the speakers, the agenda, the volunteers, the attendees and the marketing.",
  },
  {
    props: {
      date: "2021 - 2022",
      className: "vertical-timeline-element--education",
      contentStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(233, 30, 99)" },
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
      icon: <FontAwesomeIcon icon={faCode} />,
    },
    title: "Complete Web Development Training",
    subtitle: "Programming Hero",
    content: " Completed Web Development Training from Programming Hero and got a 5 star rating from the Instructor.",
  },
  {
    props: {
      iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
      icon: <FontAwesomeIcon icon={faStar} />,
    }
  },
];

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [elementsToShow, setElementsToShow] = useState(2);

  const loadMore = () => {
    setElementsToShow(elementsToShow + 2);
  };

  const addButton = () => (
    <div
      className="fab-button"
      style={{
        backgroundColor: "rgb(25, 25, 122)",
        border: "none",
        marginTop: "10px",
      }}
      aria-label="add"
      title="Load More"
    >
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );

  const getTimelineElements = () =>
    dataExamples.slice(0, elementsToShow).map((element, index) => {
      if (Object.keys(element.props).length === 2 && element.props.hasOwnProperty('iconStyle') && element.props.hasOwnProperty('icon')) {
        return (
          <VerticalTimelineElement
            key={index}
            iconStyle={element.props.iconStyle}
            icon={element.props.icon}
          />
        );
      }
      return (
        <VerticalTimelineElement key={index} {...element.props}>
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {element.subtitle}
          </h4>
          <p>{element.content}</p>
        </VerticalTimelineElement>
      );
    });

  return (
    <div className="container">
      <div className="project-section" id="project">
        <div className="container p-4">
          <h1 className="d-flex justify-content-center pt-5 pb-5 fw-bold text-white">
            My&nbsp;{" "}
            <Typical
              loop={Infinity}
              steps={["Education &", 3000, "Experience", 3000]}
            ></Typical>
          </h1>
        </div>
      </div>
      <VerticalTimeline>
        {getTimelineElements()}
        {elementsToShow < dataExamples.length && (
          <VerticalTimelineElement
            iconOnClick={loadMore}
            iconClassName="vertical-timeline-element-icon--button"
            iconStyle={{
              background: "rgb(25, 25, 122)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
            icon={addButton()}
          />
        )}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
