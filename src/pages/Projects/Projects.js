import React from "react";
import "./Projects.css";
import Zoom from "react-reveal/Zoom";
import estateIMG from "../../assets/images/estateproject.png";
import chatIMG from "../../assets/images/chat.PNG";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent project with live links and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={estateIMG} alt="Project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDb</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="">Earth-Estate App</h5>
                  </div>
                  <div className="d-flex">
                    <a
                      href="earth-estate.onrender.com"
                      target="_blank"
                      className="ad-btn "
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/arthdarji352/mern-estate"
                      target="_blank"
                      className="ad-btn "
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={chatIMG} alt="Project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDb</span>
                  <span className="card-detail-badge">Socket.io</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Earth-Chat App</h5>
                  </div>
                  <div className="d-flex">
                    <a
                      href="https://earth-chat-app.onrender.com/"
                      target="_blank"
                      className="ad-btn "
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/arthdarji352/chat-app"
                      target="_blank"
                      className="ad-btn "
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="Project1"
                  />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDb</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ecommerce Apps</h5>
                  </div>
                  <div className="d-flex">
                    <a
                      href="https://github.com/arthdarji352/mern-estate"
                      target="_blank"
                      className="ad-btn "
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/arthdarji352/mern-estate"
                      target="_blank"
                      className="ad-btn "
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Projects;
