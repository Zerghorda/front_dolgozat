import React, { useContext } from "react";
import { ApiContext } from "./context/ApiContext";
import { Row } from "react-bootstrap";
import Recept from "./SorRecept";

function TablazatReceptek() {
  const { receptLista } = useContext(ApiContext);

  return (
    <>
      <Row>
        {receptLista.map((elem, index) => {
          return <Recept elem={elem} index={index} key={index} />;
        })}
      </Row>
    </>
  );
}

export default TablazatReceptek;
