import React from 'react'
import { Link } from 'react-router-dom'

import * as paths from "../utils/constants/routerConstants"

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Home = () => {

  return (
    <div className="container h-100 d-flex justify-content-center">
      <div className="my-auto">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs="auto">
              <Image style={{ width: "150px", height: "150px" }} src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" roundedCircle></Image>
            </Col>
            <Col xs="auto">
              <h1 className="display-4">Hey, I'm Person</h1>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs="12">
              <h6 style={{ lineHeight: "30px" }}>I focus on writing <span style={{ fontSize: "25px", color: "yellow" }}>clean and efficient code</span> with a passion for designing <span style={{ fontSize: "25px", color: "yellow" }}> beautiful and functional user experience</span></h6>
            </Col>
            <Col className="mt-3" xs="auto">
              <FontAwesomeIcon color="white" size="lg" icon={faEnvelope} />
            </Col>
            <Col className="mt-3">
              <h6>jama3137@gmail.com</h6>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs="auto"><a href="https://www.linkedin.com/in/jama-mohamed/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="white" size="3x" icon={faLinkedin} /></a></Col>
            <Col xs="auto"><a href="https://github.com/jama5262" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="white" size="3x" icon={faGithub} /></a></Col>
            <Col xs="auto"><a href="https://twitter.com/timedjama5262" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="white" size="3x" icon={faTwitter} /></a></Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank" rel="noopener noreferrer"><Button variant="primary">View Resume</Button></a>
            </Col>
            <Col xs="auto">
              <Link to={paths.PROJECTS}><Button className="animateProjectButton" variant="primary">View Projects</Button></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
