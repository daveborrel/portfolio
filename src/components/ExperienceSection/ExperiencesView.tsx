import { Container, Row, Col } from "react-bootstrap";
import { ExperienceItem } from "./ExperienceItem";

const experiences = [
  {
    title: "Full Stack Software Engineer I",
    company: "Procurify",
    dates: "Jun. 2024 - Jan. 2025",
    tasks: [
      "Implemented multiple full-stack initiatives including enhancing purchase order search API to streamline user workflows.",
      "Migrated Angular modules to React, reducing codebase size while establishing architectural patterns for future migrations.",
    ],
    techStack: ["React", "Django", "Python", "TypeScript", "Docker"],
  },
  {
    title: "Full Stack Software Engineer Intern",
    company: "Procurify",
    dates: "Sep. 2022 - Aug. 2023",
    tasks: [
      "Enhanced Django REST APIs to support web and mobile clients, optimizing backend logic and automating workflows",
      "Built comprehensive test coverage across React, Django, and E2E testing while maintaining rapid issue resolution",
    ],
    techStack: ["React", "Angular", "Django", "Python", "TypeScript"],
  },
];

export const ExperiencesView = () => {
  return (
    <Container id="experience">
      <Row className="text-center mb-3" id="experience">
        <h2>🏢 Experience</h2>
      </Row>
      <Row className="text-center mb-3">
        <h4>
          <a
            href="https://www.linkedin.com/in/daveborrel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin me-1"></i> LinkedIn
          </a>
        </h4>
      </Row>
      <Row className="d-flex">
        {experiences.map((experience, index) => (
          <Col md={6} key={index}>
            <ExperienceItem experience={experience} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
