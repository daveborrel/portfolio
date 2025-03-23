import { Container, Row } from "react-bootstrap";
import { TILFeed } from "./TILFeed";

export const TILSection = () => {
  return (
    <Container id="experience">
      <Row className="text-center mb-3" id="til">
        <h2>📚 Today I Learned</h2>
      </Row>
      <Row className="d-flex">
        <TILFeed></TILFeed>
      </Row>
    </Container>
  );
};
