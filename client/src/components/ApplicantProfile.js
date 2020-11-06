import React from "react";
import { Button, Form } from "semantic-ui-react";

const ApplicantProfile = () => {
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
      <Button primary onClick={loginSubmit} type="submit">
        Login
      </Button>
      {error ? (
        <div>Incorrect email or password</div>
      ) : (
        <Redirect to="/applicant_create_profile" />
      )}
    </Form>
  );
};

export default ApplicantProfile;
