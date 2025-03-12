import { Card } from "react-bootstrap";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.jpg";

type ProjectId = 1 | 2 | 3;

interface ProjectCardProps {
  key?: number;
  item: {
    id: ProjectId; // Define id type as 1, 2, or 3
    title: string;
    description: string;
    githubLink: string;
  };
}

const images = {
  1: image3,
  2: image1,
  3: image2,
};

export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <Card>
      <Card.Header>{item.title}</Card.Header>
      <Card.Img variant="top" src={images[item.id]} />
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link
          href={item.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github me-1"></i> Github
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};
