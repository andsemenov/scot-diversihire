import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { getAllProfiles } from "../api/profiles";

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
      <div class="ui two column grid raised segment">
        <div class="twelve wide column">
          <label for="job title" class="ui white left ribbon label">
            Job Title
          </label>
          <div class="ui small segment">
            <h2 class="ui small header">{profile.job_title}</h2>
          </div>
          <label for="bio" class="ui white left ribbon label">
            Bio
          </label>
          <div class="ui small segment">
            <p>{profile.bio}</p>
          </div>
        </div>
        <div class="three wide column">
          <div>
            <Button
              fluid
              class="ui primary button"
              primary
              as={Link}
              to={`/public-applicant-profiles/${profile.profile_public_id}`}
            >
              View Profile
            </Button>
            <Button fluid class="ui primary button" primary>
              Contact Applicant
            </Button>
          </div>
        </div>
      </div>
    );
  });
};

export default ApplicantsList;
