import React, { useState, useEffect } from "react";
import { Form, Grid, Segment, Label } from "semantic-ui-react";
import { getProfile } from "../api/profiles";
import moment from "moment";

const ApplicantPublicProfile = ({ match }) => {
  const publicId = match.params.public_id;

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getProfile(publicId).then(setProfile);
  }, [publicId]);

  if (profile) {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width="10">
            <Label as="label" color="white" ribbon="left">
              Job title
            </Label>
            <Segment>{profile.job_title}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Form.Button primary>Contact Candidate</Form.Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Label>Bio</Label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="10">
            <Segment>{profile.bio}</Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Label>Work Experience</Label>
          </Grid.Column>
        </Grid.Row>

        {profile.experiences.map((experience, key) => (
          <Grid.Column
            width="10"
            key={key}
            style={{
              border: "dotted",
              borderRadius: "30px"
            }}
          >
            <Label key={key + "lab2"}>Position</Label>
            <Segment key={key + "seg3"}>{experience.job_title}</Segment>
            <Label key={key + "lab4"}>Company</Label>
            <Segment key={key + "seg5"}>{experience.company}</Segment>
            <Label key={key + "lab6"}>Description</Label>
            <Segment key={key + "seg7"}>{experience.description}</Segment>

            <Label key={key + "lab8"}>Employment Date</Label>

            <Grid.Row columns={2} divided="vertically">
              <Grid.Column>
                <Segment key={key + "seg9"}>
                  {moment(experience.start_date).format("MMMM YYYY")}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment key={key + "seg10"}>
                  {moment(experience.end_date).format("MMMM YYYY")}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        ))}

        {/*  <Label>Education</Label>

        {profile.educations.map((education, key) => (
          <Grid.Column
            style={{
              border: "dotted",
              borderRadius: "10px",
            }}
          >
            <Label>Institution</Label>
            <Segment>{education.institution}</Segment>
            <Label>Qualification</Label>
            <Segment>{education.qualification}</Segment>
            <Label>Course title</Label>
            <Segment>{education.course_title}</Segment>
            <Label>Education Date</Label>
            <Segment>
              {moment(education.start_date).format("MMMM YYYY")}
            </Segment>
            <Segment>{moment(education.end_date).format("MMMM YYYY")}</Segment>
          </Grid.Column>
        ))} */}
      </Grid>
    );
  } else return <p>Loading</p>;
};

export default ApplicantPublicProfile;
