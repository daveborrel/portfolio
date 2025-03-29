import { Carousel, Badge } from "react-bootstrap";
import { ProcurifyDark } from "./ProcurifyDark";
import { ProcurifyLight } from "./ProcurifyLight";

interface ExperienceCarouselProps {
  experiences: any;
}

export const ExperienceCarousel = ({
  experiences,
}: ExperienceCarouselProps) => {
  return (
    <Carousel>
      {experiences.map((experience: any, index: number) => (
        <Carousel.Item key={index}>
          {experience.id === 1 ? <ProcurifyDark /> : <ProcurifyLight />}
          <Carousel.Caption>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.dates}</p>
            <div className="d-flex gap-2 justify-content-center">
              {experience.techStack.map((stack: any, index: number) => (
                <Badge bg="primary" key={index}>
                  {stack}
                </Badge>
              ))}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
