import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { AboutImage } from "./AboutImage";
import { TILFeed } from "../TILSection/TILFeed";

export const AboutView = () => {
  return (
    <Container>
      <Row className="text-center mb-3" id="about-me">
        <h2>About Me</h2>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="text-center" id="about-me">
            <Card.Header>Hover Me!</Card.Header>
            <Card.Body>
              <AboutImage />
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
        <Col md={6}>
          <TILFeed />
        </Col>
      </Row>
    </Container>
  );
};
