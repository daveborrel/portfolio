import Card from "react-bootstrap/Card";
import procurify from "/1proc_light.png";

export const ProcurifyLight = () => {
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
