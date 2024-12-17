import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Navbar expand="lg">
      <Container>
        <Row>
          <Col className="col-lg-12">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Kezdőlap</Nav.Link>
                <Nav.Link href="/admin">Admin felület</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col className="col-lg-12">
            <article>
              <Outlet />
            </article>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Layout;
