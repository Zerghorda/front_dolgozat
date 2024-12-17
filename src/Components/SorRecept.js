import React from "react";
import { Card, Col } from "react-bootstrap";

function SorRecept(props) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{props.elem.name}</Card.Title>
          <Card.Text>
            <img img src={props.elem.img_route} alt="étel kép" />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h3>{props.elem.category_id}</h3>
          {props.elem.description}
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default SorRecept;
