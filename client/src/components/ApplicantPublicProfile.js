import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import { getProfile } from "../api/profiles";
import moment from "moment";

const ApplicantPublicProfile = ({ match }) => {
  const publicId = match.params.public_id;

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getProfile(publicId).then(data => setProfile(data));
  }, [publicId]);

  if (profile) {
    return (
      <Form>
        <Form.TextArea name="bio" label="Bio" defaultValue={profile.bio} />
        <Form.Field>
          <label htmlFor="job_title">Job title</label>
          <input id="job_title" defaultValue={profile.job_title} />
        </Form.Field>

        <div>
          <p>
            <strong>Experience</strong>
          </p>
          {profile.experience.map((experience, key) => (
            <div key={key + "divtop"}>
              <div key={key + "div"} className="ui raised segment">
                <p key={key + "title"}>{experience.job_title}</p>
                <p key={key + "company"}>{experience.company}</p>
                <p key={key + "description"}>{experience.description}</p>
              </div>
              <Form.Field>
                <label key={key + "label"} htmlFor="years_experience">
                  Years Experience
                </label>
                <input
                  key={key + "input"}
                  id="years_experience"
                  defaultValue={numberYears(
                    experience.start_date,
                    experience.end_date
                  )}
                />
              </Form.Field>
            </div>
          ))}
        </div>
        <Form.Button primary>Contact Candidate</Form.Button>
      </Form>
    );
  } else return <p>Loading</p>;
};

export default ApplicantPublicProfile;

const numberYears = (start_date, end_date) => {
  const start = moment(start_date);
  const end = moment(end_date);
  return end.diff(start, "years");
};
