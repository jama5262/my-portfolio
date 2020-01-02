import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {

  const list = [1, 2, 3, 4, 5]

  return (
    <Container>
      <Row>
        <Col><h1>Projects</h1></Col>
      </Row>
      <Row>
        {
          list.map((value) => {
            return <Col xs="12" sm="12" md="6"><ProjectCard/></Col>
          })
        }
      </Row>
    </Container>
  )
}
