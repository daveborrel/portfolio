import Card from "react-bootstrap/Card";
import cropImage from "/crop.jpg";

export const AboutImage = () => {
  return (
    <>
      <Card>
        <div>
          <Card.Img variant="top" src={cropImage} />
        </div>
      </Card>
    </>
  );
};
