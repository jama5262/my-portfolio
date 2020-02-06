import React, { useEffect } from 'react'
import { analytics } from "firebase";
import { Link } from 'react-router-dom'

import * as paths from "../utils/constants/routerConstants"

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export const Home = () => {

  useEffect(() => {
    analytics().logEvent("new_user", { value: new Date().toLocaleString() })
  }, [])

  return (
    <div className="container h-100 d-flex justify-content-center">
      <div className="my-auto">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs="auto">
              <Image style={{ width: "150px", height: "150px" }} src="https://firebasestorage.googleapis.com/v0/b/studious-hydra-133711.appspot.com/o/profile%20picture%2F20200102_154614.jpg?alt=media&token=0e6d2278-3693-47d0-ae98-f7ab2c48e62d" roundedCircle></Image>
            </Col>
            <Col xs="auto">
              <h1 className="display-4">Hey, I'm Jama</h1>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs="12">
              <h6 style={{ lineHeight: "30px" }}>I focus on writing <span style={{ fontSize: "25px", color: "yellow" }}>clean and efficient code</span> with a passion for <span style={{ fontSize: "25px", color: "yellow" }}> designing beautiful and functional user experience</span></h6>
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
            <Col xs="auto"><a href="https://stackoverflow.com/users/6459510/jama-mohamed" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="white" size="3x" icon={faStackOverflow} /></a></Col>
            <Col xs="auto"><a href="https://twitter.com/timedjama5262" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="white" size="3x" icon={faTwitter} /></a></Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <a href="https://firebasestorage.googleapis.com/v0/b/studious-hydra-133711.appspot.com/o/resume%2FResume.pdf?alt=media&token=d89c72c9-ee55-4846-963a-3f00b41c19d1" target="_blank" rel="noopener noreferrer"><Button variant="primary">View Resume</Button></a>
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
