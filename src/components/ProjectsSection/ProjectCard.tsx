import { Card } from "react-bootstrap";
import image1 from "/1.png";
import image2 from "/2.png";

interface ProjectCardProps {
  key?: number;
  item: any;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.id === 1 ? image1 : image2} />
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
