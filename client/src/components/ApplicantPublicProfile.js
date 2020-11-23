import React, { useState, useEffect } from "react";
import { Form, Grid, Segment, Label } from "semantic-ui-react";
import { getProfile } from "../api/profiles";
import moment from "moment";

const ApplicantPublicProfile = ({ match }) => {
  const publicId = match.params.public_id;

  const [profile, setProfile] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getProfile(publicId).then(
      profile => {
        setProfile(profile);
        setLoaded(true);
      },
      () => setLoaded(true)
    );
  }, [publicId]);

  if (loaded) {
    return profile !== null ? (
      <Segment>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width="12">
              <h2> APPLICANT PROFILE</h2>
            </Grid.Column>
            <Grid.Column width={4}>
              <Form.Button primary>Contact Candidate</Form.Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column width={12}>
            <Label>Job Title</Label>
            <Segment>{profile.job_title}</Segment>
          </Grid.Column>

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
            <Label>Work Experience</Label>
          </Grid.Row>
        </Grid>

        {profile.experiences.map((experience, key) => (
          <Grid key={key}>
            <Grid.Column key={key + "col2"} width={12}>
              <Label key={key + "lab3"}>Position</Label>
              <Segment key={key + "seg4"}>{experience.job_title}</Segment>
              <Label key={key + "lab5"}>Company</Label>
              <Segment key={key + "seg6"}>{experience.company}</Segment>
              <Label key={key + "lab7"}>Description</Label>
              <Segment key={key + "seg8"}>{experience.description}</Segment>
              <Label key={key + "lab9"}>Employment Date</Label>
              <Segment key={key + "seg10"}>
                <Grid key={key + "gr11"}>
                  <Grid.Row key={key + "lab12"} columns={2}>
                    <Grid.Column key={key + "col13"} width={3}>
                      <Segment key={key + "seg14"}>
                        {moment(experience.start_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                    <Grid.Column key={key + "col15"} width={3}>
                      <Segment key={key + "seg16"}>
                        {moment(experience.end_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        ))}

        <Grid>
          <Grid.Row>
            <Label>Education</Label>
          </Grid.Row>
        </Grid>

        {profile.educations.map((education, key) => (
          <Grid key={key}>
            <Grid.Column key={key + "col2"} width={12}>
              <Label key={key + "lab3"}>Institution</Label>
              <Segment key={key + "seg4"}>{education.institution}</Segment>
              <Label key={key + "lab5"}>Qualification</Label>
              <Segment key={key + "seg6"}>{education.qualification}</Segment>
              <Label key={key + "lab7"}>Course title</Label>
              <Segment key={key + "seg8"}>{education.course_title}</Segment>
              <Label key={key + "lab9"}>Education Date</Label>
              <Segment key={key + "seg10"}>
                <Grid key={key + "gr11"}>
                  <Grid.Row key={key + "lab12"} columns={2}>
                    <Grid.Column key={key + "col13"} width={3}>
                      <Segment key={key + "seg14"}>
                        {moment(education.start_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                    <Grid.Column key={key + "col15"} width={3}>
                      <Segment key={key + "seg16"}>
                        {moment(education.end_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        ))}
      </Segment>
    ) : (
      <p>No such profile exists</p>
    );
  } else return <p>Loading</p>;
};

export default ApplicantPublicProfile;
