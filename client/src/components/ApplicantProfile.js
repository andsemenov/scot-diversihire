import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { newProfile } from "../api/profiles";
import Experience from "./Experience";

const ApplicantProfile = () => {
  const defaultExperience = {
    company: "",
    job_title: "",
    description: "",
    start_date: "",
    end_date: ""
  };

  const [profileData, setProfileData] = useState({
    job_title: "",
    bio: "",
    location: "",
    employment_status: "full_time"
  });

  const [experienceData, setExperienceData] = useState([defaultExperience]);

  const [profileCreated, setProfileCreated] = useState(null);

  // function creates a new form with the content described below
  const addExperience = () => {
    setExperienceData([...experienceData, defaultExperience]);
  };

  const handleChange = (event, result) => {
    const { name, value } = result || event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // function merges new data with the old data
  const updateExperienceData = (value, name, index) =>
    experienceData.map((experience, experienceIndex) => {
      if (index === experienceIndex) {
        return { ...experience, [name]: value };
      }
      return experience;
    }); // function merges new data with old data

  const handleExperience = ({ event, targetData, index }) => {
    if (targetData) {
      const { name, value } = targetData;

      setExperienceData(updateExperienceData(value, name, index));
    } else {
      const { name, value } = event.target;
      setExperienceData(updateExperienceData(value, name, index));
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
    <Form.Group onSubmit={createProfile}>
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
        addExperience={
          addExperience
        } /* using function addExperience as a props in Experience Component */
      />

      {/* Button adds all form data to the database */}
      <Form.Button primary onClick={createProfile} type="submit">
        Create Profile
      </Form.Button>
      {profileCreated && <Redirect to="/profile_creation_successful" />}
      {profileCreated === false && (
        <div>Error! You have NOT created a profile</div>
      )}
    </Form.Group>
  );
};

export default ApplicantProfile;
