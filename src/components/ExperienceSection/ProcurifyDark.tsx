import Card from "react-bootstrap/Card";
import procurify from "/1proc.png";

export const ProcurifyDark = () => {
  return (
    <>
      <Card>
        <div>
          <Card.Img variant="top" src={procurify} />
        </div>
      </Card>
    </>
  );
};
