import React, { useState } from "react";
import { Form, Radio } from "semantic-ui-react";
import { signUp } from "../api/auth";
import { Redirect } from "react-router-dom";
import CustomButton from "./CustomButton";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [redirectRoute, setRedirectRoute] = useState("");

  const handleChange = event => {
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
      signUp({ email, password, role }).then(response => {
        setRedirectRoute("/login");
      });
    }
  };

  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
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
  );
}

export default SignUp;
