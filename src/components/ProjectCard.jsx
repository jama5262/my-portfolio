import React from 'react'

import { Row, Col, Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

export const ProjectCard = (props) => {

  const { title, description, updatedOn, tags, link, image } = props.data

  return (
    <div>
      <Card className="mb-3" bg="dark">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <a href={ link } target="_blank" rel="noopener noreferrer"><h4>{title} <FontAwesomeIcon color="yellow" icon={faExternalLinkSquareAlt} /></h4></a>
          <h6 className="my-3" style={{lineHeight: "30px"}}>
            {description}
          </h6>
          <h6 className="mb-3" style={{ fontSize: "10px" }}>Updated on {updatedOn}</h6>
          <Row>
            {
              tags.map((tag, index) => {
                return <Col key={index} xs="auto"><h6><Badge variant="primary">{tag}</Badge></h6></Col>
              })
            }
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
