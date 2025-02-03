import { Card } from "react-bootstrap";

interface ProjectCardProps {
  key?: number;
  item: any;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Link>
          <a href={item.githubLink}>Github</a>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
