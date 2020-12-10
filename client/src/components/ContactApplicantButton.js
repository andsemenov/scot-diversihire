import React from "react";
import { Form, Modal, TextArea, Icon, Header, Grid } from "semantic-ui-react";
import { sendMessage } from "../api/messages";
import CustomButton from "./CustomButton";

const ContactApplicantButton = props => {
  const [open, setOpen] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const recruiterEmailAddress = user.email;
  const recruiterId = user.id;
  const [message, setMessage] = React.useState({
    profile_public_id: props.profilePublicId,
    message: `
    Hi, 
    I wanted to get in touch with you as at COMPANYNAME we are currently looking to hire some engineers that 
    match your profile.
    If you would be interested in speaking to me some more please reply to this email and we can arrange a time to speak. 
    I look forward to speaking to you please get in touch on my email address below.
    ${recruiterEmailAddress}`,
    recruiter_id: recruiterId
  });

  const handleChange = event => {
    setMessage({ ...message, message: event.target.value });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <CustomButton
          disabled={props.isDisabled}
          fluid
          title={props.isDisabled ? "Contacted" : "Contact Applicant"}
        />
      }
    >
      <Modal.Header>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width="15">
              <Header as="h1">Contact Applicant</Header>
            </Grid.Column>
            <Grid.Column width="1">
              <Icon link name="close" onClick={() => setOpen(false)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Header>
      <Modal.Content>
        <Form>
          <TextArea
            label="Message"
            defaultValue={message.message}
            rows={8}
            onChange={handleChange}
          ></TextArea>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <CustomButton
          title="Contact Applicant"
          onClick={() => {
            sendMessage(message).then(res => {
              props.updateApplicantPublicIds(
                props.profilePublicId,
                props.index
              );
              setMessageSent(res);
              setOpen(false);
            });
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
export default ContactApplicantButton;
