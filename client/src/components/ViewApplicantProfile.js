import React, { useState, useEffect } from "react";
import { Grid, Segment, Label } from "semantic-ui-react";
import { getProfile } from "../api/profiles";
import ContactApplicantButton from "./ContactApplicantButton";
import { getRecruiterMessages } from "../api/messages";
import moment from "moment";

const ViewApplicantProfile = ({ match }, props) => {
  const publicId = match.params.id;
  const [profile, setProfile] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getProfile(publicId).then(
      profile => {
        setProfile(profile);
        setLoaded(true);
      },
      () => setLoaded(true)
    );
  }, [publicId]);

  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const recruiterId = user.id;

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getRecruiterMessages(recruiterId);
      setMessages(response);
    };
    if (!messages.length) {
      fetchMessages();
    }
  }, [messages, recruiterId]);

  const updateApplicantPublicIds = (id, index) => {
    const updatedApplicantPublicIds = [...messages];
    updatedApplicantPublicIds[index] = {
      ...updatedApplicantPublicIds[index],
      profile_public_id: id
    };
    setMessages(updatedApplicantPublicIds);
  };

  if (loaded) {
    return profile !== null ? (
      <Segment>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width="12">
              <h2> APPLICANT PROFILE</h2>
            </Grid.Column>
            <Grid.Column width={4}>
              <ContactApplicantButton
                profilePublicId={profile.profile_public_id}
                to={`/public-applicant-profiles/${profile.profile_public_id}`}
                isDisabled={messages.some(
                  message =>
                    message.profile_public_id === profile.profile_public_id
                )}
                updateApplicantPublicIds={updateApplicantPublicIds}
                index={0}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column width={12}>
            <Label>Job Title</Label>
            <Segment>{profile.job_title}</Segment>
          </Grid.Column>

          <Grid.Row>
            <Grid.Column>
              <Label>Bio</Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="12">
              <Segment>{profile.bio}</Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Label>Work Experience</Label>
          </Grid.Row>
        </Grid>

        {profile.experiences.map((experience, key) => (
          <Grid key={key}>
            <Grid.Column key={key + "col2"} width={12}>
              <Label key={key + "lab3"}>Position</Label>
              <Segment key={key + "seg4"}>{experience.job_title}</Segment>
              <Label key={key + "lab5"}>Company</Label>
              <Segment key={key + "seg6"}>{experience.company}</Segment>
              <Label key={key + "lab7"}>Description</Label>
              <Segment key={key + "seg8"}>{experience.description}</Segment>
              <Label key={key + "lab9"}>Employment Date</Label>
              <Segment key={key + "seg10"}>
                <Grid key={key + "gr11"}>
                  <Grid.Row key={key + "lab12"} columns={2}>
                    <Grid.Column key={key + "col13"} width={3}>
                      <Segment key={key + "seg14"}>
                        {moment(experience.start_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                    <Grid.Column key={key + "col15"} width={3}>
                      <Segment key={key + "seg16"}>
                        {moment(experience.end_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        ))}

        <Grid>
          <Grid.Row>
            <Label>Education</Label>
          </Grid.Row>
        </Grid>

        {profile.educations.map((education, key) => (
          <Grid key={key}>
            <Grid.Column key={key + "col2"} width={12}>
              <Label key={key + "lab3"}>Institution</Label>
              <Segment key={key + "seg4"}>{education.institution}</Segment>
              <Label key={key + "lab5"}>Qualification</Label>
              <Segment key={key + "seg6"}>{education.qualification}</Segment>
              <Label key={key + "lab7"}>Course title</Label>
              <Segment key={key + "seg8"}>{education.course_title}</Segment>
              <Label key={key + "lab9"}>Education Date</Label>
              <Segment key={key + "seg10"}>
                <Grid key={key + "gr11"}>
                  <Grid.Row key={key + "lab12"} columns={2}>
                    <Grid.Column key={key + "col13"} width={3}>
                      <Segment key={key + "seg14"}>
                        {moment(education.start_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                    <Grid.Column key={key + "col15"} width={3}>
                      <Segment key={key + "seg16"}>
                        {moment(education.end_date).format("MMMM YYYY")}
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        ))}
      </Segment>
    ) : (
      <p>No such profile exists</p>
    );
  } else return <p>Loading</p>;
};

export default ViewApplicantProfile;
