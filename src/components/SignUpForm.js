import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Label,
  Input,
  Button,
  FormFeedback,
  FormGroup,
  FormText
} from "reactstrap";
import { toast } from "react-toastify";

const SignUpForm = ({ signUpUser, toggle }) => {
  const [delay, setDelay] = useState(null);
  const [usernameValid, setUsernameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const successCallback = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    toggle();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !username || !password || !confirmPassword) {
      return toast.error("All fields must be filled!", toastSettings);
    }

    if (password.length < 8) {
      return toast.error("Password is too short!", toastSettings);
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords are not matching!", toastSettings);
    }

    if (username.length <= 6) {
      return toast.error("Username is too short!", toastSettings);
    }

    if (!usernameValid) {
      return toast.error("Username is invalid, please check!", toastSettings);
    }

    signUpUser(username, email, password, successCallback);
  };

  const checkUsername = newUsername => {
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
      )
      .then(response => {
        if (response.data.valid) {
          setUsernameValid(true);
        } else {
          setUsernameValid(false);
        }
      });
  };

  const handleUsernameInput = e => {
    clearTimeout(delay);
    const newUsername = e.target.value;
    setUsername(newUsername);

    const newDelay = setTimeout(() => {
      checkUsername(newUsername);
    }, 500);

    setDelay(newDelay);
  };

  const getInputProp = () => {
    if (!username.length) {
      return null;
    }

    if (username.length <= 6) {
      return { invalid: true };
    }

    if (usernameValid) {
      return { valid: true };
    } else {
      return { invalid: true };
    }
  };

  const getFormFeedback = () => {
    if (!username.length) {
      return null;
    }

    if (username.length <= 6) {
      return <FormFeedback invalid>Must be at least 6 characters</FormFeedback>;
    }

    if (usernameValid) {
      return <FormFeedback valid>Sweet! That name is available</FormFeedback>;
    } else {
      return <FormFeedback invalid>Sorry! Username is taken</FormFeedback>;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Email Address</Label>
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={e => handleUsernameInput(e)}
          {...getInputProp()}
        />
        {getFormFeedback()}
        <FormText>Enter a username between 6 and 20 characters</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Choose a password, min 6 characters"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </FormGroup>
      <Button className="mx-auto d-block" outline color="primary">
        Sign Up
      </Button>
    </Form>
  );
};

const toastSettings = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export default SignUpForm;
