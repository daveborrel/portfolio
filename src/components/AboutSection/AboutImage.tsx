import Card from "react-bootstrap/Card";
import cropImage from "/crop.jpg";

export const AboutImage = () => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={cropImage}
          style={{
            width: "30%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
        <Card.Body>
          <Card.Text>
            👋 Hi! My name is Dave and I am a Full-stack Software Engineer. I am
            recent graduate of the BCS program at UBC, and I also hold a
            Bachelor of Science in Biomedical Physiology. I’m passionate about
            problem-solving and software development.
          </Card.Text>
          <Card.Text>
            💻 I work with JavaScript, TypeScript, Python, React, Django, and
            Node.
          </Card.Text>
          <Card.Text>
            Outside of programming, I really enjoy training Muay Thai 🥊, going
            on Hikes ⛰️, watching anime 🇯🇵, and learning Spanish 🇪🇸.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
