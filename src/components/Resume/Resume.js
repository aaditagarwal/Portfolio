import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={"https://bit.ly/aaditagarwal_resume"} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Work Experience</h3>
            <Resumecontent
              company="Numtra LLC"
              title="Software Engineer Summer'21 Intern"
              date="May 2021 - September 2021"
              link="https://numtra.com/"
              content={[
                "Fabricated Microsoft Power Platform plug-ins for consuming and authoring AI by 1,000’s of business users.",
                " Developed an interface application improving efficiency by 40% to integrate across business tools.",
                "Improved PaaS API response time by 20% with remodeled pipeline and added OAuth2 authentication.",
                " Developed a React application with REST APIs handling, and optimized Data Management for secure operations."
              ]}
            />
            <Resumecontent
              company="TEAL India"
              title="Data Science Winter'21 Intern"
              date="November 2020 - April 2021"
              link="https://www.tealindia.in/"
              content={[
                "Designed and engineered 2 data-backed solutions and generated 3 analytical reports for real-estate data.",
                "Developed data transformer pipelines for processing legal records across 7 cities and 2 databases.",
                "Built data pipelines for Data Science ecosystem automation to boost development time by 15%."
              ]}
            />
            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              company="CoDS-COMAD 2021"
              title="ActiveNet"
              link="https://cods-comad.in/2021/accepted_papers.html"
              date="October 2020"
              content={[
                "Published paper entitled ActiveNet for Demo Track of The ACM India Joint International Conference on Data Science and Management of Data 2021",
              ]}
            />            
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              company="Indian Institute of Information Technology and Management Gwalior"
              date="August 2018 - May 2023 (Expected)"
              content={[
                "Integrated Masters and Bachelors in Information Technology",
                "CGPA: 7.94 (Till 6th Sem)",
                "Coursework: Operating Systems, Computer Networking, OOPS, Database Management, Software Engineering"
              ]}
            />
            <h3 className="resume-title">Leadership Experience</h3>
            <Resumecontent
              title="Head Of Department and Event Organizer"
              company="Aurora, IIIT Gwalior"
              date="October 2019 - February 2020"
              content={[
                "Headed the Calling Department particularly the Campus Ambassador Programme.",
                "Event organizer of Informal Events (Quizzing events)."
              ]}
            />
            <Resumecontent
            title="Executive"
            company="Student Activity Council, IIIT Gwalior"
            date="August 2019 - December 2019"
            content={[
              "An active executive member of the Student Activity Council (SAC), IIITM Gwalior.",
              "Been actively involved in organizing several cultural events in the institution and dealing in event management."
            ]}
            />

            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Winner of E&Y GDS Radio Hackathon - AI in Capacity Management",
                "Winner of Game of Codes Hackathon organized by IIIT, Una - Machine Learning Team"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
