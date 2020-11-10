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
    employment_status: ""
  });

  const [experienceData, setExperienceData] = useState([
    {
      company: "",
      job_title: "",
      job_description: "",
      start_date: "",
      end_date: ""
    }
  ]);

  const [profileCreated, setProfileCreated] = useState(null);

  const handleChange = (event, result) => {
    const { name, value } = result || event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleExperienceChange = (event, index) => {
    const { name, value } = event.target;
    setExperienceData([{ ...experienceData[index], [name]: value }]);
  };
  const options = [
    { key: "1", text: "Looking for full time", value: "full_time" },
    { key: "2", text: "Looking for part time", value: "part_time" },
    { key: "3", text: "Not currently looking", value: "not_looking" }
  ];

  const createProfile = () => {
    const formData = { ...profileData, experiences: experienceData };
    newProfile(formData).then(data => {
      setProfileCreated(data);
      console.log(data);
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
        name="employment_status"
        placeholder="Status of employment"
        options={options}
        value={profileData.employment_status}
        onChange={handleChange}
      />
      <Experience
        experienceData={experienceData}
        handleExperience={handleExperienceChange}
      />
      <Form.Button primary onClick={createProfile} type="submit">
        Create Profile
      </Form.Button>
      {profileCreated ? <Redirect to="/profile_creation_successful" /> : null}
      {profileCreated === false ? (
        <div>Error! You have NOT created a profile</div>
      ) : null}
    </Form>
  );
};

export default ApplicantProfile;
