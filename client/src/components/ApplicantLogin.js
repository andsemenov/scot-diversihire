import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { signApi } from "../api/auth";

const ApplicantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [checkedItem, setCheckedItem] = useState("applicant");

  const roleCheckboxes = [
    {
      id: "applicant",
      key: "applicant",
      label: "I'm An Applicant"
    },
    {
      id: "recruiter",
      key: "recruiter",
      label: "I'm A Recruiter"
    }
  ];

  const handleChange = event => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const loginSubmit = () => {
    signApi(email, password)
      .then(data => {
        const token = data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setSuccess(true);
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
      });
  };

  const handleRoleChange = event => {
    const id = event.target.id;
    if (checkedItem === id) {
      setCheckedItem(undefined);
    } else {
      setCheckedItem(id);
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
      <Form.Group inline required>
        {roleCheckboxes.map(item => (
          <Form.Checkbox
            key={item.key}
            id={item.id}
            label={item.label}
            checked={item.id === checkedItem}
            onChange={handleRoleChange}
          />
        ))}
      </Form.Group>
      <Button primary onClick={loginSubmit} type="submit">
        Login
      </Button>
      {error && <p>Incorrect email or password</p>}
      {success && checkedItem === "applicant" && (
        <Redirect to="/applicant_create_profile" />
      )}
    </Form>
  );
};

export default ApplicantLogin;
