import React from "react";
import "./About.css";
import Profile from "../../assets/Arth_photo.jpg";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Profile} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p className="fst-italic">
                As a Full Stack Web Developer, I have a passion for developing
                innovative, dynamic websites that provide top-notch user
                experiences. I've worked with a number of different technologies
                and have some experience with both front-end and back-end
                programming.
                <br />I am skilled in creating responsive, interactive user
                interfaces utilising contemporary Javascript frameworks like
                React and NextJS. I also have experience with server-side
                technologies like Node.js, Express.js, and MongoDB, which
                enables me to create scalable backend systems and robust APIs.
                <br />
                I'm constantly looking for new possibilities and challenges to
                improve my abilities.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
