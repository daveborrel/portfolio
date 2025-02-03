import Card from "react-bootstrap/Card";
import { AboutImage } from "./AboutImage";

export const AboutView = () => {
  return (
    <Card className="text-center" id="about-me">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <AboutImage />
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};
