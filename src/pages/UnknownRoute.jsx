import React from 'react'
import UnknownRouteLogo from "../assets/UnknownRoute.svg"
import { Container, Row, Col, Image } from "react-bootstrap";

export const UnknownRoute = () => {
  return (
    <div className="container h-100 d-flex justify-content-center">
      <div className="my-auto">
        <Container>
          <Row>
            <Col className="align-self-center"><h1>I think you're lost</h1></Col>
            <Col className="align-self-center" xs="auto"><Image style={{ width: "400px", height: "400px" }} src={UnknownRouteLogo}></Image></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
