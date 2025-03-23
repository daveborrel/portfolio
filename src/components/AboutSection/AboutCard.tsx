import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title style={{ fontSize: "3rem", fontWeight: "bold" }}>
          DAVE BORREL
        </Card.Title>
        <Card.Title style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          FULL-STACK SOFTWARE ENGINEER
        </Card.Title>
        <Card.Text>
          Passionate about
          <span style={{ color: "#87CEFA", fontWeight: "bold" }}>
            {" "}
            API Integration
          </span>
          ,
          <span style={{ color: "#87CEFA", fontWeight: "bold" }}>
            {" "}
            System Design
          </span>
          ,
          <span style={{ color: "#87CEFA", fontWeight: "bold" }}>
            {" "}
            Healthcare Technology
          </span>
          , and
          <span style={{ color: "#87CEFA", fontWeight: "bold" }}> Space</span>.
          I am a graduate of the{" "}
          <span style={{ color: "#87CEFA", fontWeight: "bold" }}>UBC</span> BCS
          program, and I also hold a Bachelor of Science in Biomedical
          Physiology, which fuels my interest in healthcare applications.
        </Card.Text>
        <Row>
          <Col>
            <Card.Title style={{ fontSize: "3rem", fontWeight: "bold" }}>
              2
            </Card.Title>
            <Card.Text>YEARS OF EXPERIENCE</Card.Text>
          </Col>
          <Col>
            <Card.Title style={{ fontSize: "3rem", fontWeight: "bold" }}>
              10+
            </Card.Title>
            <Card.Text>PERSONAL PROJECTS</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
