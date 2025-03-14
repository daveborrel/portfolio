import Image from "react-bootstrap/Image";
import landingimage from "/landing.jpeg";
import { Button } from "react-bootstrap";

export const LandingPageSection = () => {
  return (
    <div className="landing" id="home">
      <Image src={landingimage} fluid></Image>
      <h1>Dave Borrel</h1>
      <h4>Python | TypeScript | JavaScript | Node | Django | Docker | Rust</h4>
      <Button
        variant="outline-light"
        size="lg"
        onClick={() => {
          document
            .getElementById("about-me")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Learn More
      </Button>
    </div>
  );
};
