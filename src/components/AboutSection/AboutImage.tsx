import { useState } from "react";
import Card from "react-bootstrap/Card";
import cropImage from "/crop.jpg";

export const AboutImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card>
        <div
          style={{
            position: "relative",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Card.Img
            variant="top"
            src={cropImage}
            style={{
              opacity: isHovered ? 0.3 : 1,
              transition: "opacity 0.3s ease",
            }}
          />

          {isHovered && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <p>
                👋 Hi! My name is Dave and I am a Full-stack Software Engineer.
                I am recent graduate of the BCS program at UBC, and I also hold
                a Bachelor of Science in Biomedical Physiology. I’m passionate
                about problem-solving and software development. <br></br>💻 I
                work with JavaScript, TypeScript, Python, React, Django, and
                Node. <br></br> Outside of programming, I really enjoy training
                Muay Thai 🥊, going on Hikes ⛰️, watching anime 🇯🇵, and learning
                Spanish 🇪🇸.
              </p>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
