import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const LoginForm = ({loginUser, toggle}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const successLogin = () => {
    toggle()
    setUsername('')
    setPassword('')
  }

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(username, password, successLogin)
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            placeholder="Enter Username..."
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button className="mx-auto d-block" outline color="primary">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
