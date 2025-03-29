import { Container, Row, Col, Card } from "react-bootstrap";
import { ExperienceCarousel } from "./ExperienceCarousel";

const experiences = [
  {
    id: 1,
    title: "Full Stack Software Engineer I",
    company: "Procurify",
    dates: "Jun. 2024 - Jan. 2025",
    techStack: ["React", "Django", "Python", "TypeScript", "Docker"],
  },
  {
    id: 2,
    title: "Full Stack Software Engineer Intern",
    company: "Procurify",
    dates: "Sep. 2022 - Aug. 2023",
    techStack: ["React", "Angular", "Django", "Python", "TypeScript"],
  },
];

export const ExperiencesView = () => {
  return (
    <Container id="experience">
      <Row className="text-center mb-3" id="work">
        <Col>
          <h2>Work</h2>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col md={12}>
          <ExperienceCarousel experiences={experiences} />
        </Col>
      </Row>
    </Container>
  );
};
