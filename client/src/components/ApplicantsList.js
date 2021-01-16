import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Label, Segment, Header } from "semantic-ui-react";
import { getAllProfiles } from "../api/profiles";
import { getRecruiterMessages } from "../api/messages";
import ContactApplicantButton from "./ContactApplicantButton";
import CustomButton from "./CustomButton";

const ApplicantsList = () => {
  const [profiles, setProfiles] = useState([]);
  const [messages, setMessages] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const recruiterId = user.id;

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await getAllProfiles();
      setProfiles(response);
    };

    const fetchMessages = async () => {
      const response = await getRecruiterMessages(recruiterId);
      setMessages(response);
    };

    if (!profiles.length) {
      fetchProfiles();
    }
    if (!messages.length) {
      fetchMessages();
    }
  }, [messages, profiles, recruiterId]);

  const updateApplicantPublicIds = (id, index) => {
    const updatedApplicantPublicIds = [...messages];
    updatedApplicantPublicIds[index] = {
      ...updatedApplicantPublicIds[index],
      profile_public_id: id,
      recruiter_id: recruiterId
    };
    setMessages(updatedApplicantPublicIds);
  };

  return profiles.map((profile, key) => {
    return (
      <Segment key={key + "1s"} raised>
        <Grid key={key + "2g"}>
          <Grid.Column key={key + "3g"} width={12}>
            <Label key={key + "4l"} as="label">
              Job Title
            </Label>
            <Segment key={key + "5s"} size="small">
              <Header key={key + "6h"} as="h2" size="small">
                {profile.job_title}
              </Header>
            </Segment>
            <Label key={key + "7l"} as="label">
              Bio
            </Label>
            <Segment key={key + "8s"}>
              <p>{profile.bio}</p>
            </Segment>
          </Grid.Column>

          <Grid.Column key={key + "9g"} width={3}>
            <div key={key + "10d"}>
              <CustomButton
                title="View Profile"
                key={key + "11b"}
                fluid
                as={Link}
                to={`/public-applicant-profiles/${profile.profile_public_id}`}
              />
            </div>

            <div key={key + "12d"}>
              <ContactApplicantButton
                profilePublicId={profile.profile_public_id}
                to={`/public-applicant-profiles/${profile.profile_public_id}`}
                isDisabled={messages.some(
                  message =>
                    message.recruiter_id === recruiterId &&
                    message.profile_public_id === profile.profile_public_id
                )}
                updateApplicantPublicIds={updateApplicantPublicIds}
                index={key}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  });
};

export default ApplicantsList;
