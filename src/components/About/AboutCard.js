import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";

function AboutCard() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an engineering student at <span className="purple"> IIIT Gwalior </span> graduating in Spring 2023 with an Integrated Masters in Information Technology.
              I have been exploring and working in the technology space, specifically in <span className="purple">Software Engineering</span> and <span className="purple">Back-end Engineering</span>, 
              for the past 4 years since I began my engineering. I love developing solutions on ideas to harness technology for tackling real-time challenges 
              and love to build products which can produce impact at scale.
              <br />
              <br />

              I like to learn and feed my curiosity on numerous skills of the technical world and think along the lines of clean, maintainable, and scalable code, mainly in
              <span className="purple"> Python</span>, <span className="purple">C++</span>, and <span className="purple">JavaScript</span>.
              My skills have been portrayed and enhanced in the various internships I have worked at, 
              namely <span className="purple">Software Engineering Intern</span> at Numtra LLC and <span className="purple">Data Science Intern</span> at TEAL-India. 
              These internships have given me experiences ranging from working as a <span className="purple">professional</span>, 
              to <span className="purple">collaborating in teams</span>, to deliver solutions while quickly learning and <span className="purple">adapting </span>
              to the various codebases and technologies used at these organizations.
              <br />
              I strive to be an active <span className="purple">team player</span> with a can-do attitude 
              leveraging my <span className="purple">problem solving</span> and <span className="purple">leadership</span> skills.
              My extrovert attitude helps me amplify my <span className="purple">communication</span> and <span className="purple">socializing</span> skills.
              <br />
              <br />
              
              Outside of the technical world, when I am not on my laptop I like <span className="purple">swimming</span> and <span className="purple">cycling</span>. 
              I am a <span className="purple">social person</span> and I like to hang out with friends and family as well as meet new people. 
              I am also a <span className="purple">movie buff</span>, <i>so hit me up for movie nights</i> !
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutCard;
