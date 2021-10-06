import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div className="overlay">
          <div className="fadeText">
            Linux
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
        <div className="overlay">
          <div className="fadeText">
            GitHub
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="overlay">
          <div className="fadeText">
            VS Code
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="overlay">
          <div className="fadeText">
            Jupyter
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="overlay">
          <div className="fadeText">
            Postman
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
