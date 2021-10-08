import React from "react";
import Card from "react-bootstrap/Card";

function Home2() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aadit Agarwal </span>
            a software engineer pursuing Integrated Masters and Bachelors in Information Technology at the
            <span className="purple"> Indian Institute of Information Technology (IIIT) Gwalior</span>, India.
            I am also a <span className="purple">software engineer</span> and love to build products which can produce impact at scale.
            <br />
            <br />
            I am currently focused on growing as a Developer specifically <span className="purple">Back-end engineering</span> and broadening my knowledge about <span className="purple">Machine Learning</span>.
            <br />           
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Home2;