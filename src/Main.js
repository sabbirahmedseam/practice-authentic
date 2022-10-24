import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col className='d-none d-lg-block' lg="2">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
