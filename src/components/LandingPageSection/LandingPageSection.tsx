import Image from "react-bootstrap/Image";
import landingimage from "/landing.jpeg";
import { Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";

// Idea for typed animation is taken from https://blog.logrocket.com/5-ways-implement-typing-animation-react/

export const LandingPageSection = () => {
  return (
    <div className="landing" id="home">
      <Image src={landingimage} fluid></Image>
      <h1>
        <ReactTyped strings={["Dave Borrel"]} typeSpeed={100} cursorChar=">" />
      </h1>
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
