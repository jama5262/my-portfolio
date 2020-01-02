import React from 'react'
import { Card, Button } from "react-bootstrap";

export const ProjectCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="https://www.xmple.com/wallpaper/black-white-lines-streaks-stripes-1920x1080-c2-ffffff-000000-l2-42-59-a-45-f-1.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
