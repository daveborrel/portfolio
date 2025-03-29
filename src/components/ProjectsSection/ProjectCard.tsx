import { Card, Badge, Row, Col } from "react-bootstrap";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.jpg";
import image4 from "/rust.png";

type ProjectId = 1 | 2 | 3 | 4;

interface ProjectCardProps {
  key?: number;
  item: {
    id: ProjectId; // Define id type as 1, 2, or 3
    title: string;
    description: string;
    githubLink: string;
    stack: string[];
  };
}

const images = {
  1: image3,
  2: image4,
  3: image1,
  4: image2,
};

export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <Card className="projectcard">
      <Card.Header>{item.title}</Card.Header>
      <div className="cardimage">
        <Card.Img variant="top" src={images[item.id]} />
      </div>
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col md={3}>
            <Card.Link
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github me-1"></i> Github
            </Card.Link>
          </Col>
          <Col md={9}>
            <div className="d-flex gap-2 justify-content-center">
              {item.stack.map((s: any, index: number) => (
                <Badge bg="primary" key={index}>
                  {s}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
