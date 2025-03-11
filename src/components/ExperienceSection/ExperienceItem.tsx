import { Card } from "react-bootstrap";
import TechStackAccordion from "../TechStackAccordion/TechStackAccordion";

import procurify_logo from "/procurify_logo.jpeg";

interface ExperienceItemProps {
  experience: any;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Header>{experience.title}</Card.Header>
        <Card.Img
          src={procurify_logo}
          style={{
            width: "10%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        ></Card.Img>
        <Card.Subtitle className="mb-2">{experience.company}</Card.Subtitle>
        <Card.Text>{experience.dates}</Card.Text>
        {experience.tasks.map((task: any, index: any) => (
          <Card.Text key={index}>{task}</Card.Text>
        ))}
        <Card.Footer>
          <TechStackAccordion
            techStack={experience.techStack}
          ></TechStackAccordion>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
