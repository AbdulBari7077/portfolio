import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";

function Projects() {
  
  const projects = [

    {
      isBlog: false,
      title: "Sinf-e-Ahan (FYP)",
      description: "With the help of React Native, REST API, Node.JS, MongoDB,Mongoose.JS, TypeScript, Stripe Payment Gateway, and FCM,users may build a platform to hire workers based on theirqualifications and expertise and monitor them using Google MapsAPI. Constructed a robust frontend architecture with reusablecomponents, improving user experience and decreasing load timeby 20%, using React.js and Redux."

    },
    {
      isBlog: false,
      title: "APPOINTMENT BOT | Artificial Intelligence | BERT ",
      description: "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1% .Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."

    },
    {
      isBlog: false,
      title: "Food Delivero | Django",
      description: "Food Delivery management System that allows over 50restaurants to register with their Menu list and delivers food within 40 minutes"
    },
    {
      isBlog: false,
      title: "National Engineering Robotics Contest - NUST Site | Django",
      description: "The website allows students to register in more than 5 competitions, get their challan, and upload a snap of submitted challan to get verified for the competition.The solution has been created using HTML, CSS, BOOTSTRAP ,Django view-basedtemplates and HTML,CSS ,JS"

    },
    {
      isBlog: false,
      title: "ENTENCE RECOMMENDATION & WORD PREDICTION | DATA STRUCTURES",
      description: "A program that is developed with C++ Linked List to suggestsentences and predicts words using dictionary and history hashtables"

    },
    {
      isBlog: false,
      title: "PROFESSIONAL LOUNGE | DataBase Systems",
      description: "A website that enables users to hire employees based on theirqualifications and expertise, using BOOTSTRAP, DJANGO, HTML,and CSS"

    },
    {
      isBlog: false,
      title: "Editor.io | C language",
      description: "Run time code editor that enables to write, edit and save a codeusing file stream with a maximum file size of 10 KBs through Windows CLI "

    },
  ]
  const [filteredList, setFilteredList] = useState(projects);
  const handleSearch = (e) => {

    if (e.target.value && e.target.value.replace(/\s/g, '')) {
      console.log(e.target.value ,"-------");
      const filtered = projects.filter((project) =>{
        if(project.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        project.description.toLowerCase().includes(e.target.value.toLowerCase()))
        {
          return project;
        }
      });
      console.log(filtered)
      setFilteredList(filtered);
    }
    else setFilteredList(projects);
  }
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="d-flex w-100 justify-content-center" >
          <Col sm={6}>
            <Form className="d-flex">
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </InputGroup.Text>
                <FormControl type="search" className="me-2" placeholder="Search" onChange={(e) => handleSearch(e)} />
              </InputGroup>

            </Form>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            filteredList.map((project) => {
              return (
                <Col md={4} className="project-card">
                  <ProjectCard
                    isBlog={project.isBlog}
                    title={project.title}
                    description={project.description}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
