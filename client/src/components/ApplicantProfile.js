import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { newProfile } from "../api/profiles";
import Experience from "./Experience";

const ApplicantProfile = () => {
  const [profileData, setProfileData] = useState({
    job_title: "",
    bio: "",
    location: "",
    employment_status: "full_time"
  });

  const [experienceData, setExperienceData] = useState([
    {
      company: "",
      job_title: "",
      description: "",
      start_date: "",
      end_date: ""
    }
  ]);

  const [profileCreated, setProfileCreated] = useState(null);

  const handleChange = (event, result) => {
    const { name, value } = result || event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleExperience = ({ event, targetData, experienceIndex }) => {
    if (targetData) {
      const { name, value } = targetData;
      setExperienceData([
        { ...experienceData[experienceIndex], [name]: value }
      ]);
    } else {
      const { name, value } = event.target;
      setExperienceData([
        { ...experienceData[experienceIndex], [name]: value }
      ]);
    }
  };
  const options = [
    { key: "1", text: "Looking for full time", value: "full_time" },
    { key: "2", text: "Looking for part time", value: "part_time" },
    { key: "3", text: "Not currently looking", value: "not_looking" }
  ];

  const createProfile = () => {
    const formData = { ...profileData, experiences: experienceData };
    const token = localStorage.getItem("token");
    newProfile(formData, token).then(isSuccessful => {
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
      <Experience
        experienceData={experienceData}
        handleExperience={handleExperience}
      />
      <Form.Button primary type="submit">
        Create Profile
      </Form.Button>
      {profileCreated && <Redirect to="/profile-creation-successful" />}
      {profileCreated === false && (
        <div>Error! You have NOT created a profile</div>
      )}
    </Form>
  );
};

export default ApplicantProfile;
