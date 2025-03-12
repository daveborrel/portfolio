import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { AboutImage } from "./AboutImage";
import { TILFeed } from "../TILSection/TILFeed";

export const AboutView = () => {
  return (
    <Row>
      <Col>
        <Card className="text-center" id="about-me">
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <AboutImage />
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Col>
      <Col>
        <TILFeed />
      </Col>
    </Row>
  );
};
