import { Card } from "react-bootstrap";

interface ExperienceItemProps {
  experience: any;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body className="text-center">
        <Card.Title>{experience.title}</Card.Title>
        <Card.Subtitle className="mb-2">{experience.company}</Card.Subtitle>
        <Card.Text>{experience.dates}</Card.Text>
      </Card.Body>
    </Card>
  );
};
