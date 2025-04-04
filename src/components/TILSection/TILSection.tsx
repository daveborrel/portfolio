import { Container, Row } from "react-bootstrap";
import { TILFeed } from "./TILFeed";

import { useEffect } from "react";

export const TILSection = () => {
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
    const todayILearnedContainer = document.querySelector(".today_i_learned");

    if (todayILearnedContainer) observer.observe(todayILearnedContainer);

    // Clean up the observer when the component unmounts
    return () => {
      if (todayILearnedContainer) observer.unobserve(todayILearnedContainer);
    };
  }, []);

  return (
    <Container id="experience" className="today_i_learned">
      <Row className="text-center mb-3" id="til">
        <h2>Today I Learned</h2>
      </Row>
      <Row className="d-flex">
        <TILFeed></TILFeed>
      </Row>
    </Container>
  );
};
