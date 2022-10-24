import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthProvider";

const Registration = () => {
  const { createUser, veirfyEmail, updateUserProfile } =
    useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  // console.log(createUser);

  const handleRegisterIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = { displayName: name, photoURL: photoURL };
    // console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        updateUserProfile(profile)
          .then((result) => {})
          .catch((error) => console.log(error));
        veirfyEmail()
          .then((result) => {})

          .catch((error) => console.log(error));
        toast.success("verify your email");
      })

      .catch((error) => console.log(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
    console.log(accepted);
  };

  return (
    <Form onSubmit={handleRegisterIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control name="photo" type="text" placeholder="Enter PhotoUrl" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleAccepted}
          type="checkbox"
          label="Check me out"
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Registration;
