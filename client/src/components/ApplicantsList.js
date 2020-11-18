import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Label } from "semantic-ui-react";
import { getProfiles } from "../api/profiles";

const ApplicantsList = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchProfiles = async () => {
    const response = await getProfiles();
    // console.log("response", response);
    setProfiles(response);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return profiles.map(profile => {
    return (
      <div style={{ borderBottom: "2px dashed black" }}>
        <Label>Job Title</Label>
        <div class="ui raised segment">
          <h2 class="ui medium header">{profile.job_title}</h2>
        </div>
        <Label>Bio</Label>
        <div class="ui raised segment">
          <p>{profile.bio}</p>
        </div>
        <Button
          primary
          as={Link}
          to={`/public_applicant_profiles/${profile.profile_public_id}`}
        >
          View Applicant{" "}
        </Button>
        <Button primary> Contact Applicant </Button>
      </div>
    );
  });
};

export default ApplicantsList;
