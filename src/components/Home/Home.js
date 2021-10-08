import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Home2 from "./Home2";
import avatar from "../../Assets/avatar.png"
import laptopImg from "../../Assets/about.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container>
          <Particle />
          <Container className="home-content">
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> AADIT AGARWAL</strong>
                </h1>

                <h3 className="subheading-name">
                  Welcome to my corner on the internet.
                </h3>

                <div className="home-typeWritter">
                  <Type />
                </div>
              </Col>

              <Col md={4} className="myAvtar">
                <img src={avatar} className="img-fluid" alt="avatar" />
              </Col>
            </Row>
          </Container>
        </Container>
      
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="purple"> Know Who I'M</strong>
              </h1>
              <Home2 />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
