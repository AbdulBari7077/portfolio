import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImMinus } from "react-icons/im";


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
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdul Bari</footer>
          <p style={{ textAlign: "justify" }}>
            <br />
            <br />
            <span className="purple">Education</span>
            <br />
          </p>
          <ul>
            <ul className="about-activity" style={{ fontSize: '13px' }}>

              <h4>Intermediate</h4>
              <ul>English</ul>
              <ul>Chemistry</ul>
              <ul>Mathematics</ul>
              <ul>Physics</ul>
              <ul>Urdu</ul>
              <ul>Islamiat</ul>
              <ul>Pakistan Studies</ul>
              <h4>Semester 1</h4>
              <ul>Programming Fundamentals</ul>
              <ul>Applied Physics</ul>
              <ul>Calculus and Analytical Geometry</ul>
              <ul>English Composition and Comprehension</ul>
              <ul>Islamic and Religious Studies</ul>
              <h4>Semester 2</h4>
              <ul>English Comprehension and Composition</ul>
              <ul>Digital Logic Design</ul>
              <ul>Islamic and Religious Studies</ul>
              <ul>Differential Equations</ul>
              <ul>Communication and Presentation Skills</ul>
              <h4>Semester 3</h4>
              <ul>Pakistan Studies</ul>
              <ul>Object Oriented Programming</ul>
              <ul>Computer Organization and Assembly Language</ul>
              <ul>Linear Algebra</ul>
              <ul>Psychology</ul>
              <h4>Semester 4</h4>
              <ul>Data Structures</ul>
              <ul>Theory of Automata</ul>
              <ul>Probablity and Statistics</ul>
              <ul>Database Systems</ul>
              <ul>Operating Systems</ul>
              <h4>Semester 5</h4>
              <ul>Design and Analysis of Algorithm</ul>
              <ul>Software Design And Analysis</ul>
              <ul>Artificial Intelligence</ul>
              <ul>Computer Networks</ul>
              <ul>Parallel and distributed Computing</ul>
              <h4>Semester 6</h4>
              <ul>Software Engineering</ul>
              <ul>Datascience</ul>
              <ul>Technical and Business Writing</ul>
              <ul>Software for Mobile Devices</ul>
              <h4>Semester 7</h4>
              <ul>Information Security</ul>
              <ul>Agile Software Project Management</ul>
            </ul>
          </ul>

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
