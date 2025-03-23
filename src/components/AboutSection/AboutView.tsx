import { Row, Col, Container } from "react-bootstrap";
import AboutCard from "./AboutCard";
import { AboutImage } from "./AboutImage";

export const AboutView = () => {
  return (
    <Container>
      <Row className="text-center mb-3" id="about-me">
        <h2>About Me</h2>
      </Row>
      <Row>
        <Col md={5}>
          <AboutImage />
        </Col>
        <Col md={7}>
          <AboutCard />
        </Col>
      </Row>
    </Container>
  );
};
