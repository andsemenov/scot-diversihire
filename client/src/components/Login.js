import React, { useState, useEffect } from "react";
import { Form, Segment, Header } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { getProfileByApplicantId } from "../api/profiles";
import { signApi } from "../api/auth";
import CustomButton from "./CustomButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [redirectRoute, setRedirectRoute] = useState("");
  const [applicantId, SetApplicantId] = useState(null);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const fetchProfile = async (applicantId) => {
      const response = await getProfileByApplicantId(applicantId);
      if (response.length) {
        setRedirectRoute("/applicant-inbox");
      } else setRedirectRoute("/applicant-create-profile");
    };

    if (applicantId) {
      fetchProfile(applicantId);
    }
  }, [applicantId]);

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
      setEmailError(!isEmail(event.target.value));
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
      setPasswordError(!isPassword(event.target.value));
    }

    //if (!passwordError && !emailError) setButtonDisabled(false);
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    setEmailError(!isEmail(email));
    setPasswordError(!isPassword(password));
    if (!passwordError && !emailError && password.length && email.length)
      signApi(email, password)
        .then((data) => {
          const token = data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(data.user));
          if (data.user && data.user.role === "applicant") {
            SetApplicantId(data.user.id);
          } else if (data.user && data.user.role === "recruiter") {
            setRedirectRoute("/public-applicant-profiles");
          }
        })
        .catch(() => {
          setError(true);
          setRedirectRoute("");
        });
  };

  const isEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isPassword = (password) => {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
  };

  return (
    <Segment className="login">
      <Header className="login-title" as="h1">
        LOGIN
      </Header>
      <Form className="login-body" onSubmit={loginSubmit}>
        <Form.Input
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

        <CustomButton title="LOGIN" type="submit" disabled={buttonDisabled} />
        {error ? <div>Incorrect email or password</div> : null}
        {redirectRoute && <Redirect to={redirectRoute} />}
      </Form>
    </Segment>
  );
};

export default Login;
