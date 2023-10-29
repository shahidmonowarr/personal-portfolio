import Aos from "aos";
import React, { useEffect } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Typical from "react-typical";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="my-skills" id="skills">
      <Container>
        <div className="px-2 text-center pb-3">
          <h1 className="d-flex justify-content-center pt-5 pb-5 fw-bold text-white">
            My&nbsp;{" "}
            <Typical
              loop={Infinity}
              steps={["Skills", 2000, "Skills", 2000, "Skills", 2000]}
            ></Typical>
          </h1>
          <p className="text-white">
            I am expertise on web development in this skills.
          </p>
        </div>
        <Row className="px-2 skills">
          <Col
            data-aos="fade-right"
            xs={12}
            md={12}
            lg={6}
            className="pe-5 first-col"
          >
            <h3 className="d-flex justify-content-start pt-2 pb-2 fw-bold text-white">
              Frontend
            </h3>
            <div className="my-progress">
              <h5 className="text-secondary">Tailwind</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Ant Design</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">JavaScript</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">TypeScript</h5>
              <ProgressBar animated now={75} label={`${75}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">React Js</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Next Js</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Redux</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            xs={12}
            md={12}
            lg={6}
            className="ps-5 second-col"
          >
            <h3 className="d-flex justify-content-start pt-2 pb-2 fw-bold text-white">
              Backend
            </h3>
            <div className="my-progress">
              <h5 className="text-secondary">Node Js</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Express Js</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">MongoDB</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Mongoose</h5>
              <ProgressBar animated now={75} label={`${75}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">PostgreSQL</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Prisma</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">JWT</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            xs={12}
            md={12}
            lg={6}
            className="pe-5 first-col"
          >
            <h3 className="d-flex justify-content-start pt-2 pb-2 fw-bold text-white">
              Tools
            </h3>
            <div className="my-progress">
              <h5 className="text-secondary">GitHub</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Firebase</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Heroku</h5>
              <ProgressBar animated now={75} label={`${75}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Vercel</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Netlify</h5>
              <ProgressBar animated now={75} label={`${75}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Supabase</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            xs={12}
            md={12}
            lg={6}
            className="ps-5 second-col"
          >
            <h3 className="d-flex justify-content-start pt-2 pb-2 fw-bold text-white">
              Other Technologies
            </h3>
            <div className="my-progress">
              <h5 className="text-secondary">Firebase</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">RTK Query</h5>
              <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">GraphQL</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Aggregation</h5>
              <ProgressBar animated now={65} label={`${65}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Husky</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div className="my-progress">
              <h5 className="text-secondary">Next Auth</h5>
              <ProgressBar animated now={70} label={`${70}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
