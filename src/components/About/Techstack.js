import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiPostgresql,
  DiMysql,
  DiHtml5,
  DiCss3
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="overlay">
          <div className="fadeText">
            Python
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="overlay">
          <div className="fadeText">
            C++
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="overlay">
          <div className="fadeText">
            MySQL
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql  />
        <div className="overlay">
          <div className="fadeText">
            PostgreSQL
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="overlay">
          <div className="fadeText">
            JavaScript
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="overlay">
          <div className="fadeText">
            ReactJS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="overlay">
          <div className="fadeText">
            NodeJS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="overlay">
          <div className="fadeText">
            HTML
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="overlay">
          <div className="fadeText">
            CSS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="overlay">
          <div className="fadeText">
            Git
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
