import React from 'react'
import { Accordion,Card ,Button} from "react-bootstrap";

const About = () => {
    return (
        <div>

            <Accordion defaultActiveKey="0">
  <Card style={{width:"500px" ,padding:"4px 20px" ,margin:"2% 30%"}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
            About US
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>      Qu'il soit effrayant, comique, dramatique, romantique ou autre, le cinéma sait
        éveiller nos sens. Et avec autant de titres disponibles, il y a tellement de choses à découvrir</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
            <h1></h1>
        </div>
    )
}

export default About
