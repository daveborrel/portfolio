import { Row, Col, Container } from "react-bootstrap";
import AboutCard from "./AboutCard";
import { AboutImage } from "./AboutImage";

import { useEffect } from "react";

export const AboutView = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element becomes visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add("animate");
            // Stop observing the element after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    ); // Trigger when 20% of the element is visible

    // Observe both elements
    const aboutImage = document.querySelector(".about_image");
    const aboutCard = document.querySelector(".about_card");

    if (aboutImage) observer.observe(aboutImage);
    if (aboutCard) observer.observe(aboutCard);

    // Clean up the observer when the component unmounts
    return () => {
      if (aboutImage) observer.unobserve(aboutImage);
      if (aboutCard) observer.unobserve(aboutCard);
    };
  }, []);

  return (
    <Container>
      <Row className="text-center mb-3" id="about-me">
        <h2>About Me</h2>
      </Row>
      <Row>
        <Col md={5} className="about_image">
          <AboutImage />
        </Col>
        <Col md={7} className="about_card">
          <AboutCard />
        </Col>
      </Row>
    </Container>
  );
};
