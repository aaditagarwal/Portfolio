import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I'm a student and a software engineer. Some of my major career highlights:
              <br />
              Software Engineer Internship at Numtra LLC.
              Data Science Internship at TEAL India.
              <br />
              Outside of the technical world, when I am not on my laptop I like swimming and cycling. I am a social person and I like to hang out with friends and family as well as meet new people. I am also a movie buff, <i>so hit me up for movie nights</i> !
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutCard;
