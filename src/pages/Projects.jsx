import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { getProjects } from "../redux/actions";

import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";

import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {

  const projects = useSelector(state => state.projects.projects)
  const loading = useSelector(state => state.loading.showLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, [])

  return (
    <Container>
      <Row>
        <Col className="my-5" xs="12"><h1>Projects</h1></Col>
        <Col>
          <Alert show={loading} variant="warning">
            <Spinner animation="border" role="status"></Spinner> Loading Projects
          </Alert>
        </Col>
      </Row>
      <Row className="mb-5">
        {
          projects.map((project, index) => {
            return <Col key={index} xs="12" sm="12" md="12" lg="6"><ProjectCard data={project} /></Col>
          })
        }
      </Row>
    </Container>
  )
}
