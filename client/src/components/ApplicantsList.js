import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Label, Button, Segment, Header } from "semantic-ui-react";
import { getAllProfiles } from "../api/profiles";
import "../styles/ApplicantsList.css";

const ApplicantsList = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchProfiles = async () => {
    const response = await getAllProfiles();
    setProfiles(response);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return profiles.map(profile => {
    return (
      <Segment raised>
        <Grid>
          <Grid.Column width={12}>
            <Label as="label" color="white" ribbon="left">
              Job Title
            </Label>
            <Segment size="small">
              <Header as="h2" size="small">
                {profile.job_title}
              </Header>
            </Segment>
            <Label as="label" color="white" ribbon="left">
              Bio
            </Label>
            <Segment>
              <p>{profile.bio}</p>
            </Segment>
          </Grid.Column>

          <Grid.Column width={3}>
            <div className="button-style">
              <Button
                fluid
                primary
                as={Link}
                to={`/public-applicant-profiles/${profile.profile_public_id}`}
              >
                View Profile
              </Button>
            </div>

            <div className="button-style">
              <Button fluid primary>
                Contact Applicant
              </Button>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  });
};

export default ApplicantsList;
