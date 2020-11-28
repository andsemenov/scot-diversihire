import React from "react";
import {
  Form,
  Button,
  Modal,
  TextArea,
  Icon,
  Header,
  Grid
} from "semantic-ui-react";
import { sendMessage } from "../api/messages";

const ContactApplicantButton = props => {
  const [open, setOpen] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const recruiterEmailAddress = user.email;
  const recruiterId = user.id;
  const [message, setMessage] = React.useState({
    from: `${recruiterId}`,
    message: `
    Hi, 
    I wanted to get in touch with you as at COMPANYNAME we are currently looking to hire some engineers that 
    match your profile.
    If you would be interested in speaking to me some more please reply to this email and we can arrange a time to speak. 
    I look forward to speaking to you please get in touch on my email address below.
    ${recruiterEmailAddress}`,
    to: `${props.profilePublicId}`
  });
  const handleChange = event => {
    setMessage({ ...message, message: event.target.value });
  };

  console.log(messageSent);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button disabled={props.isDisabled} fluid primary>
          {props.isDisabled ? "Contacted" : "Contact Applicant"}
        </Button>
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
        <Button
          content="Contact Applicant"
          primary
          onClick={() => {
            sendMessage(message).then(res => {
              console.log("***", res);
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
