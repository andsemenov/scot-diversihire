import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { getProfile } from "../api/profiles";
import Experience from "./Experience";

const ApplicantPublicProfile = () => {
  return (
    <Form>
      <Form.TextArea
        name="bio"
        label="Bio"
        placeholder="Tell us more about you..."
      />

      <Form.Field>
        <label htmlFor="job_title">Job title</label>
        <input id="job_title" name="job_title" placeholder="Job title" />
      </Form.Field>
      <p>array of exp</p>
      <Form.Field>
        <label htmlFor="years_experience">Years Experience</label>
        <input
          id="years_experience"
          name="years_experience"
          placeholder="years_experience"
        />
      </Form.Field>
      <p>array of edu</p>

      <Form.Button primary>Contact Candidate</Form.Button>
    </Form>
  );
};

export default ApplicantPublicProfile;
