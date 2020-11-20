import React, { useState, useEffect } from "react";
import { Form, Grid, Segment, Label } from "semantic-ui-react";
import { getProfile } from "../api/profiles";

const ApplicantPublicProfile = ({ match }) => {
  const publicId = match.params.public_id;

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getProfile(publicId).then(setProfile);
  }, [publicId]);

  if (profile) {
    return (
      <Form>
        <Label>Job title</Label>
        <Segment>{profile.job_title}</Segment>

        <Label>Bio</Label>
        <Segment>{profile.bio}</Segment>

        <Label centered>Work Experience</Label>

        {profile.experiences.map((experience, key) => (
          <Grid.Column
            style={{
              border: "dotted",
              borderRadius: "10px"
            }}
          >
            <Label>Position</Label>
            <Segment>{experience.job_title}</Segment>
            <Label>Company</Label>
            <Segment>{experience.company}</Segment>
            <Label>Description</Label>
            <Segment>{experience.description}</Segment>
            <Label>Employment Date</Label>
            <Segment>{experience.start_date}</Segment>
            <Segment>{experience.end_date}</Segment>
          </Grid.Column>
        ))}

        <Label>Education</Label>

        {profile.educations.map((education, key) => (
          <Grid.Column
            style={{
              border: "dotted",
              borderRadius: "10px"
            }}
          >
            <Label>Institution</Label>
            <Segment>{education.institution}</Segment>
            <Label>Qualification</Label>
            <Segment>{education.qualification}</Segment>
            <Label>Course title</Label>
            <Segment>{education.course_title}</Segment>
            <Label>Education Date</Label>
            <Segment>{education.start_date}</Segment>
            <Segment>{education.end_date}</Segment>
          </Grid.Column>
        ))}

        <Form.Button primary>Contact Candidate</Form.Button>
      </Form>
    );
  } else return <p>Loading</p>;
};

export default ApplicantPublicProfile;
