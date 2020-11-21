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
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <Label>Job Title</Label>
              <Segment>{profile.job_title}</Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Form.Button primary>Contact Candidate</Form.Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Label>Bio</Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="12">
              <Segment>{profile.bio}</Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Label>Work Experience</Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment>
          {profile.experiences.map((experience, key) => (
            <Grid
              key={key}
              style={{
                border: "dotted",
                borderRadius: "30px"
              }}
            >
              <Grid.Row>
                <Grid.Column width="12">
                  <Label key={key + "lab2"}>Position</Label>
                  <Segment key={key + "seg3"}>{experience.job_title}</Segment>
                  <Label key={key + "lab4"}>Company</Label>
                  <Segment key={key + "seg5"}>{experience.company}</Segment>
                  <Label key={key + "lab6"}>Description</Label>
                  <Segment key={key + "seg7"}>{experience.description}</Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
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
            </Grid>
          ))}
        </Segment>
        <Label>Education</Label>
        <Segment>
          {profile.educations.map((education, key) => (
            <Grid
              key={key}
              style={{
                border: "dotted",
                borderRadius: "30px"
              }}
            >
              <Grid.Row>
                <Grid.Column>
                  <Label key={key + "lab2"}>Institution</Label>
                  <Segment key={key + "seg3"}>{education.institution}</Segment>
                  <Label key={key + "lab4"}>Qualification</Label>
                  <Segment key={key + "seg5"}>
                    {education.qualification}
                  </Segment>
                  <Label key={key + "lab6"}>Course title</Label>
                  <Segment key={key + "seg7"}>{education.course_title}</Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Segment key={key + "seg9"}>
                    {moment(education.start_date).format("MMMM YYYY")}
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment key={key + "seg10"}>
                    {moment(education.end_date).format("MMMM YYYY")}
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          ))}
        </Segment>
      </Segment>
    );
  } else return <p>Loading</p>;
};

export default ApplicantPublicProfile;
