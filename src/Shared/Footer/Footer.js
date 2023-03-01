import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="project-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className=" text-center">
                {" "}
                <br />
                <br />
                <h4 className="text-light fw-bold">
                  SHAHID <span className="text-white">|</span>{" "}
                  <span className="text-warning">PORT</span>Folio
                </h4>
                <div className="">
                  <hr />
                  <div className="d-flex justify-content-center ">
                    <div>
                      <a
                        className="p-1 fs-4 text-white"
                        href="https://www.facebook.com/profile.php?id=100008694737634"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a
                        className="p-1 fs-4 text-white"
                        href="https://www.linkedin.com/in/shahid-monowar-/"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        className="p-1 fs-4 text-white"
                        href="https://github.com/shahidmonowarr"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        className="p-1 fs-4 text-white"
                        href="https://t.me/shahidmonowar"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                      <a
                        className="p-1 fs-4 text-white"
                        href="https://twitter.com/ShahidMonowar"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-center text-secondary fs-6 fw-bold pb-2">
            <small>{"\u00a9"} 2022 all right reserved by Shahid</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
