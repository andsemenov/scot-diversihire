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

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleChangeRole = (_, { value }) => {
    setRole(value);
  };
  const handleSignUp = () => {
    if (email && password && role) {
      signUp({ email, password, role }).then((response) => {
        setRedirectRoute("/login");
      });
    }
  };

  return (
    <Segment className="signup">
      <Header className="signup-title" as="h1">
        SIGN UP
      </Header>
      <Form className="signup-body">
        <Form.Field>
          <label className="email-label">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </Form.Field>
        <Form.Field>
          <label className="password-label">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Field>

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
        <CustomButton title="SIGN UP" onClick={handleSignUp} />
        {redirectRoute && <Redirect to={redirectRoute} />}
      </Form>
    </Segment>
  );
}

export default SignUp;
