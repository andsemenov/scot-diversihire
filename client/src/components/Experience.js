import React from "react";
import { Form } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import CustomButton from "./CustomButton";

const Experience = ({ handleExperience, experiences, addExperience }) => {
  return (
    <Form.Group>
      <h3>Work Experience</h3>
      {experiences.map((experience, index) => {
        return (
          <div key={index} style={{ paddingBottom: "15px" }}>
            <Form.Field>
              <label>Company</label>
              <input
                onChange={event => {
                  handleExperience({ event, index });
                }}
                name="company"
                placeholder="I worked at..."
                value={experience.company}
              />
            </Form.Field>

            <Form.Field>
              <label>Job Title</label>
              <input
                onChange={event => {
                  handleExperience({ event, index });
                }}
                name="job_title"
                placeholder="When I worked at.... I did.."
                value={experience.job_title}
              />
            </Form.Field>

            <Form.TextArea
              name="description"
              label="Job Description"
              placeholder="My duties involve.."
              onChange={event => {
                handleExperience({ event, index });
              }}
              value={experience.description}
            />
            <DateInput
              name="start_date"
              label="Start Date"
              placeholder="I started working for this company from.."
              onChange={(event, targetData) => {
                handleExperience({ event, targetData, index });
              }}
              iconPosition="left"
              value={experience.start_date}
            />
            <DateInput
              name="end_date"
              label="End Date"
              placeholder="I left this company on..."
              onChange={(event, targetData) => {
                handleExperience({ event, targetData, index });
              }}
              iconPosition="left"
              value={experience.end_date}
            />
          </div>
        );
      })}
      <br />
      <Form>
        <CustomButton
          title="Add a new work experience"
          onClick={addExperience}
          type="button"
        />
      </Form>
      <br />
    </Form.Group>
  );
};

export default Experience;
