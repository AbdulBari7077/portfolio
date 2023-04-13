import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight  ,ImMinus} from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdul Bari </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am a Senior pursuing Computer Science from FAST NUCES Karachi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            <br />
            <br />
            <span className="purple">Education</span>
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImMinus /> FAST National University, Karachi Bachelors in Computer Science , August 2019 - Present
            </li>
            <li className="about-activity">
              <ImMinus /> Malir Cantt Govt Degree College HSC in Engineering June 2017 - May 2019
            </li>
            <li className="about-activity">
              <ImMinus /> The Montessori Home SSC in Computer Science June 2015 - May 2017
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdul Bari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
