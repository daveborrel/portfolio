import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

type ProjectId = 1 | 2 | 3 | 4;

// Define the Project interface with the correct types
interface Project {
  id: ProjectId;
  title: string;
  description: string;
  githubLink: string;
  stack: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "UFC Sportsbetting App (Feb 2025 - Present)",
    description:
      "This is a sports betting application that helps users make informed bets using statistical methods",
    githubLink: "https://github.com/daveborrel/octagon_oracle",
    stack: ["Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "Rust Bank Management App (Feb 2025 - Present)",
    description:
      "Allows users to sign into their bank account and create transactions and loans",
    githubLink: "https://github.com/daveborrel/rust_bank_management",
    stack: ["Rust"],
  },
  {
    id: 3,
    title: "PokeDex (Apr 2022)",
    description:
      "This is a PokeDex that uses the pokemonAPI to display information about all 898 Pokemon. There is also an option to build a team of up to 6 Pokemon. I am using Materials UI to build the user interface.",
    githubLink: "https://github.com/daveborrel/PokeDex",
    stack: ["React", "PokemonAPI"],
  },
  {
    id: 4,
    title: "Habit Tracker (May 2022)",
    description: "A simple habit tracker with data visualization in Java.",
    githubLink: "https://github.com/daveborrel/Weekly_Habit_Tracker",
    stack: ["Java", "JUnit Test Framework"],
  },
];

export const ProjectsView = () => {
  // First 3 projects go in the top row
  const topRowProjects = projectsData.slice(0, 3);
  // Fourth project goes in the bottom row
  const bottomRowProjects = projectsData.slice(3, 4);

  return (
    <Container id="experience">
      <Row className="text-center mb-3" id="projects">
        <h2>Projects</h2>
      </Row>

      {/* Top row with 3 projects */}
      <Row className="d-flex mb-4">
        {topRowProjects.map((project) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="d-flex align-items-stretch"
            key={project.id}
          >
            <section className="projectcard w-100">
              <ProjectCard item={project} />
            </section>
          </Col>
        ))}
      </Row>

      {/* Bottom row with the 4th project centered */}
      <Row className="d-flex justify-content-center">
        {bottomRowProjects.map((project) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="d-flex align-items-stretch"
            key={project.id}
          >
            <section className="projectcard w-100">
              <ProjectCard item={project} />
            </section>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
