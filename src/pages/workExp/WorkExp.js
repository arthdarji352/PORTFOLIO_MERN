import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            work experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="March/2023 - Dec/2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Reactjs Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SoluLab , Ahmedabad
              </h4>
              <p>
                - focused on React.js development, gaining hands-on experience
                and expertise in this modern front-end library.
                <br />- Core React: Developed a strong foundation in React.js,
                including mastering component-based architecture, JSX, and the
                virtual DOM, enabling efficient UI development. <br />-
                Responsive Web Design: Acquired skills in creating responsive
                web applications, ensuring seamless user experiences across
                various devices and screen sizes. <br />- State Management:
                Proficient in utilizing Redux for state management, effectively
                managing and sharing application data to maintain a predictable
                and scalable application state. <br />- Component Reusability:
                Demonstrated the ability to create reusable React components,
                enhancing code maintainability and facilitating rapid
                application development. <br />- RESTful API Integration:
                Successfully integrated React applications with RESTful APIs,
                enabling data retrieval and interaction with backend services.
                <br />
                -Developed problem-solving skills, efficiently identifying and
                resolving issues to ensure smooth application functionality.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="April/2022 - August/2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Backend Developer(NodeJS)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Pulpit Mobility , Gandhinagar
              </h4>
              <p>
                - Successfully completed a 3-month internship and 2-month job as
                web developer that time focused on Node.js development, gaining
                practical experience and proficiency in this cutting-edge
                technology.
                <br />- API Development: Designed and implemented RESTful APIs
                using Node.js and Express.js, including essential features like
                user registration and login functionalities.
                <br />- Database Integration: Worked with databases (MongoDB) to
                store and retrieve user data, demonstrating competence in
                database operations.
                <br />- Version Control: Collaborated with team members using
                Git for version control, ensuring a well-maintained and
                organized codebase throughout the internship
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
