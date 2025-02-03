import { Container, Row } from "react-bootstrap";
import { ExperienceItem } from "./ExperienceItem";

const experiences = [
  {
    title: "Full Stack Software Engineer I",
    company: "Procurify",
    dates: "Jun. 2024 - Jan. 2025",
  },
  {
    title: "Full Stack Software Engineer Intern",
    company: "Procurify",
    dates: "Sep. 2022 - Aug. 2023",
  },
];

export const ExperiencesView = () => {
  return (
    <Container id="experience">
      <Row className="text-center mb-3" id="experience">
        <h2>Experience</h2>
      </Row>
      <Row className="text-center mb-3">
        <h4>
          <a href="https://www.linkedin.com/in/daveborrel/">View LinkedIn</a>
        </h4>
      </Row>
      <Row>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </Row>
    </Container>
  );
};
