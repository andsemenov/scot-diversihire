import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { newProfile } from "../api/profiles";

const ApplicantProfile = () => {
  const [profileData, setProfileData] = useState({
    job_title: "",
    bio: "",
    location: "",
    type_employment: ""
  });

  const [profileCreated, setProfileCreated] = useState(false);

  const handleChange = (event, result) => {
    const { name, value } = result || event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const options = [
    { key: "1", text: "Looking for full time", value: "full_time" },
    { key: "2", text: "Looking for part time", value: "part_time" },
    { key: "3", text: "Not currently looking", value: "not_looking" }
  ];

  const createProfile = () => {
    newProfile(profileData).then(data => {
      if (data) setProfileCreated(true);
    });
  };

  return (
    <Form>
      <Form.Field>
        <label>Job title</label>
        <input
          onChange={handleChange}
          name="job_title"
          placeholder="Job title"
        />
      </Form.Field>

      <Form.TextArea
        name="bio"
        label="Bio"
        placeholder="Tell us more about you..."
        onChange={handleChange}
      />
      <Form.Field>
        <label>Location</label>
        <input onChange={handleChange} name="location" placeholder="Location" />
      </Form.Field>
      <Form.Select
        label="Type of employment"
        name="type_employment"
        placeholder="Type of employment"
        options={options}
        value={profileData.type_employment}
        onChange={handleChange}
      />
      <Form.Button primary onClick={createProfile} type="submit">
        Create Profile
      </Form.Button>
      {profileCreated ? (
        <Redirect to="/profile_creation_successful" />
      ) : (
        <div>Error! You have NOT created a profile</div>
      )}
    </Form>
  );
};

export default ApplicantProfile;
