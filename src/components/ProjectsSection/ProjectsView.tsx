import { Container, Row } from "react-bootstrap";
import { ProjectItems } from "./ProjectItems";

export const ProjectsView = () => {
  return (
    <Container id="experience">
      <Row className="text-center mb-3" id="projects">
        <h2>Projects</h2>
      </Row>
      <Row className="text-center mb-3">
        <h4>
          <a href="https://github.com/daveborrel">View GitHub</a>
        </h4>
      </Row>
      <Row>
        <Container>
          <ProjectItems />
        </Container>
      </Row>
    </Container>
  );
};
