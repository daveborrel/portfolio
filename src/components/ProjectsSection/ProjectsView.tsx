import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

type ProjectId = 1 | 2 | 3;

// Define the Project interface with the correct types
interface Project {
  id: ProjectId;
  title: string;
  description: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "UFC Sportsbetting Application (Feb 2025 - Present)",
    description:
      "This is a sports betting application that uses Node.js, MongoDB, and Express.",
    githubLink: "https://github.com/daveborrel/octagon_oracle",
  },
  {
    id: 2,
    title: "PokeDex (Apr 2022)",
    description:
      "This is a PokeDex that uses the pokemonAPI to display information about all 898 Pokemon. There is also an option to build a team of up to 6 Pokemon. I am using Materials UI to build the user interface.",
    githubLink: "https://github.com/daveborrel/PokeDex",
  },
  {
    id: 3,
    title: "Habit Tracker (May 2022)",
    description: "A simple habit tracker with data visualization in Java.",
    githubLink: "https://github.com/daveborrel/Weekly_Habit_Tracker",
  },
];

export const ProjectsView = () => {
  return (
    <Container id="experience">
      <Row className="text-center mb-3" id="projects">
        <h2>🚧 Projects</h2>
      </Row>
      <Row className="text-center mb-3">
        <h4>
          <a href="https://github.com/daveborrel">View GitHub</a>
        </h4>
      </Row>
      <Row className="d-flex">
        {projectsData.map((project) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="d-flex align-items-stretch"
            key={project.id}
          >
            <section className="projectcard">
              <ProjectCard item={project} />
            </section>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
