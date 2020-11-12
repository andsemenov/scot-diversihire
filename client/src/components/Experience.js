import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

const Experience = ({ handleExperience, experienceData }) => {
  const [experienceIndex] = useState(0);

  return (
    <Form>
      <h3>Work Experience</h3>
      <Form.Field>
        <label>Company</label>
        <input
          onChange={event => {
            handleExperience({ event, experienceIndex });
          }}
          name="company"
          placeholder="I worked at..."
          value={experienceData[experienceIndex].company}
        />
      </Form.Field>

      <Form.Field>
        <label>Job Title</label>
        <input
          onChange={event => {
            handleExperience({ event, experienceIndex });
          }}
          name="job_title"
          placeholder="When I worked at.... I did.."
          value={experienceData[experienceIndex].job_title}
        />
      </Form.Field>

      <Form.TextArea
        name="description"
        label="Job Description"
        placeholder="My duties involve.."
        onChange={event => {
          handleExperience({ event, experienceIndex });
        }}
        value={experienceData[experienceIndex].description}
      />
      <DateInput
        name="start_date"
        label="Start Date"
        placeholder="I started working for this company from.."
        onChange={(event, targetData) => {
          handleExperience({ event, targetData, experienceIndex });
        }}
        iconPosition="left"
        value={experienceData[experienceIndex].start_date}
      />
      <DateInput
        name="end_date"
        label="End Date"
        placeholder="I left this company on..."
        onChange={(event, targetData) => {
          handleExperience({ event, targetData, experienceIndex });
        }}
        iconPosition="left"
        value={experienceData[experienceIndex].end_date}
      />
    </Form>
  );
};

export default Experience;
