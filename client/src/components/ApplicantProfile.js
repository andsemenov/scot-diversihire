import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { newProfile } from "../api/profiles";

const ApplicantProfile = () => {
  const [profileData, setProfileData] = useState({
    job_title: "",
    bio: "",
    location: "",
    employment_status: ""
  });

  const [profileCreated, setProfileCreated] = useState(null);

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
    const token = localStorage.getItem("token");
    newProfile(profileData, token).then(isSuccessful => {
      setProfileCreated(isSuccessful);
    });
  };

  return (
    <Form onSubmit={createProfile}>
      <Form.Field>
        <label htmlFor="job_title">Job title</label>
        <input
          id="job_title"
          name="job_title"
          placeholder="Job title"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.TextArea
        name="bio"
        label="Bio"
        placeholder="Tell us more about you..."
        onChange={handleChange}
      />
      <Form.Field>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Select
        label="Status of employment"
        name="employment_status"
        placeholder="Status of employment"
        options={options}
        value={profileData.employment_status}
        onChange={handleChange}
      />
      <Form.Button primary type="submit">
        Create Profile
      </Form.Button>
      {profileCreated && <Redirect to="/profile_creation_successful" />}
      {profileCreated === false && (
        <div>Error! You have NOT created a profile</div>
      )}
    </Form>
  );
};

export default ApplicantProfile;