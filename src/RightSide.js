import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "./image/man.jpg";
import pic2 from "./image/nature.jpg";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "./AuthProvider";

const RightSide = () => {
  const { googleSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const loginGoogle = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={loginGoogle}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-secondary">Login with GitHub</Button>
      </ButtonGroup>

      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RightSide;
