import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import LeftSide from "./LeftSide";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link to="/">React-Bootstrap</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <h5>{user?.displayName}</h5>
              {user?.uid ? (
                <Button onClick={handleOut}>logout</Button>
              ) : (
                <>
                  <Link className="" to="/login">
                    Login
                  </Link>
                  <Link to="register">Registration</Link>
                </>
              )}

              <Link to="/profile">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSide></LeftSide>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
