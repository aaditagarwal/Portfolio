import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import graphRec from "../../Assets/Projects/graphRec.png";
import netIntruder from "../../Assets/Projects/netIntruder.png";
import wellSAP from "../../Assets/Projects/wellSAP.png";
import solveNet from "../../Assets/Projects/solveNet.png";
import activeNet from "../../Assets/Projects/activeNet.png";
import fitPred from "../../Assets/Projects/fitPred.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Personal Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graphRec}
              isBlog={false}
              title="GraphRec"
              description="Developed a Collaborative Filtering based Recommender System built by Engineering a Knowledge Graph to provide semantic knowledge of User Item information to the system along side Extracted the visualizations of the Knowledge Graph to produce Explainability of the recommendation system. At the end Designed a Web Application for the recommender system built on Amazon e-commerce products."
              link="https://github.com/aaditagarwal/GraphRec"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netIntruder}
              isBlog={false}
              title="Net Intruder"
              description="Designed anomaly detection based system to detect malicious activities in real-time network traffic. Built on network flow generated from packet data to incorporate continuous nature of network traffic. Developed 3 individual ML classifiers to improve detection of known attacks amongst exposed anomalies."
              link="https://github.com/aaditagarwal/NetIntruder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wellSAP}
              isBlog={false}
              title="WellSAP"
              description="Identification of metrics related to wellness of an employee to provide a Wellness score, Both physical and mental wellbeing is considered. Consideration of most of the organization’s population to avoid skewed data. Identification of the collective metrics to come up with more meaningful strategy for wellness programs."
              link="https://github.com/aaditagarwal/WellSAP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activeNet}
              isBlog={false}
              title="ActiveNet"
              description="Developed a pipeline to detect levels of activeness in real-time, using a single RGB image of a target person. We introduce a novel pose encoding technique, which encodes the 2-Dimensional keypoints extracted using Human Pose Estimation (HPE) algorithm."
              link="https://github.com/aaditagarwal/ActiveNet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitPred}
              isBlog={false}
              title="Fitment Predictor"
              description="A Kivy based application to determine the fitment of an employee from the supply database for particular demand heuristics. A Fitment Score is calculated and based upon which the employee is categorized with the Fitment Segments."
              link="https://github.com/aaditagarwal/Fitment-Predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solveNet}
              isBlog={false}
              title="SolveNet"
              description="A system which can first segment the digits and symbols in the image. Then it predicts the segmented text character by character to recognize the text. Once the text is recognized, the text needs to be formulated into a mathematical expression, which can be calculated to achieve the final goal of the system, i.e., evaluate an image of handwritten mathematical expressions."
              link="https://github.com/aaditagarwal/SolveNet"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Functional Group Determination"
              description="Developed a predictive model which can predict the composition and underlying structure (Functional Groups present in the compound) of a new organic compound from its FTIR data given being trained on structures of different compounds and their Infrared Spectroscopy."
              link="https://github.com/aaditagarwal/prediction_of_functional_groups"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
