import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TablazatReceptek from "../Components/TablazatReceptek";

function Public() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Receptek</h3>
          <TablazatReceptek />
        </Col>
      </Row>
    </Container>
  );
}

export default Public;
