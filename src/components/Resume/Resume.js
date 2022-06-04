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
              company="Shipsy"
              title="Software Engineer Intern'22"
              date="January 2022 - Present"
              link="https://shipsy.io"
              content={[
                "Engineered Shipsy jobs platform for 100+ internal and external openings with administration portal providing complete recruitment facility deploying an architecture built with TypeScript, JavaScript and PostgreSQL.",
                "Developed a role-based permission system using existing permission patterns across internal development platform for 300+ employees built with OAuth2 authentication and Internal Login API Authorization.",
                "Designed and developed internal platform for configuring ETL(extract transfer load) systems for various clients and corresponding services across MongoDB and Redis databases using Flask and React based stack."
                "Built business value calculators to provide clients with insights on potential savings using Shipsy services increasing client-base and outreach by 15% leveraging HubSpot CRM integration and TypeScript based system."
              ]}
            />
            <Resumecontent
              company="Numtra Inc."
              title="Software Engineer Summer'21 Intern"
              date="May 2021 - September 2021"
              link="https://numtra.com/"
              content={[
                "Fabricated Microsoft Power Platform plug-ins for consuming and authoring AI by 1,000+ business users using APIs for machine learning pipelines and automation of pre-processing and training pipelines.",
                "Developed an interface application improving timeline of Numtra PaaS services integration across business tools by 40% implementing standard service integration and Modular API.",
                "Improved PaaS API response time by 20% with remodeled pipeline and added OAuth2 authentication."
              ]}
            />
            <Resumecontent
              company="TEAL India"
              title="Data Science Winter'21 Intern"
              date="November 2020 - April 2021"
              link="https://www.tealindia.in/"
              content={[
                "Engineered pipelines for automation of data analytics and pre-processing boosting Analysis Generation timeline by 33% for 1M+ legal records using postgreSQL and python based libraries for computations and visualizations.",
                "Designed and engineered 2 data-backed solutions and generated 3 analytical reports for real-estate data."
              ]}
            />
            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              company="CoDS-COMAD 2021"
              title="ActiveNet"
              link="https://arxiv.org/abs/2010.13714"
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
              date="July 2018 - May 2023 (Expected)"
              content={[
                "Integrated Masters and Bachelors in Information Technology",
                "CGPA: 8.00/10 (Till 7th Sem)",
                "Coursework: Operating Systems, Computer Networking, OOPS, Database Management, Software Engineering, System Design"
              ]}
            />
            <h3 className="resume-title">Leadership Experience</h3>
            <Resumecontent
              title="Head Of Marketing Department and Quizzing Events"
              company="Aurora, IIIT Gwalior"
              date="October 2019 - February 2020"
              content={[
                "Headed the Calling Department particularly the Campus Ambassador Programme.",
                "Event organizer of Quizzing events."
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
