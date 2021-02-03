import React, { useState } from "react";
import { Form, Radio, Segment, Header } from "semantic-ui-react";
import { signUp } from "../api/auth";
import { Redirect } from "react-router-dom";
import CustomButton from "./CustomButton";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [redirectRoute, setRedirectRoute] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
      setEmailError(!isEmail(event.target.value));
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
      setPasswordError(!isPassword(event.target.value));
    }
  };

  const handleChangeRole = (_, { value }) => {
    setRole(value);
  };
  const handleSignUp = () => {
    if (email && password && role && !emailError && !passwordError) {
      signUp({ email, password, role }).then((response) => {
        setRedirectRoute("/login");
      });
    }
  };

  const isEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isPassword = (password) => {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
  };

  return (
    <Segment className="signup">
      <Header className="signup-title" as="h1">
        SIGN UP
      </Header>
      <Form className="signup-body" onSubmit={handleSignUp}>
        <Form.Input
          className="email-input"
          label="Email"
          autoComplete="off"
          error={emailError && { content: "Please input a valid email" }}
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="Email"
          onBlur={(e) => {
            setEmailError(!email);
          }}
        />
        <Form.Input
          className="password-input"
          label="Password"
          autoComplete="off"
          error={
            passwordError && {
              content:
                "Password should have at least one number, one lowercase and one uppercase letter, at least six characters",
            }
          }
          onChange={handleChange}
          name="password"
          placeholder="Password"
          value={password}
          type="password"
          onBlur={(e) => {
            setPasswordError(!password);
          }}
        />
        <Form.Field>
          <Radio
            label="I am an Applicant"
            name="radioGroup"
            value="applicant"
            checked={role === "applicant"}
            onChange={handleChangeRole}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="I am a Recruiter"
            name="radioGroup"
            value="recruiter"
            checked={role === "recruiter"}
            onChange={handleChangeRole}
          />
        </Form.Field>
        <CustomButton title="SIGN UP" type="submit" />
        {redirectRoute && <Redirect to={redirectRoute} />}
      </Form>
    </Segment>
  );
}

export default SignUp;
