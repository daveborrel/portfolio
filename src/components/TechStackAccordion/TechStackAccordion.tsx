import Accordion from "react-bootstrap/Accordion";

interface TechStackProps {
  techStack: any;
}

export const TechStackAccordion = ({ techStack }: TechStackProps) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tech Stack</Accordion.Header>
        {techStack.map((item: any, index: any) => (
          <Accordion.Body key={index}>{item}</Accordion.Body>
        ))}
      </Accordion.Item>
    </Accordion>
  );
};

export default TechStackAccordion;
