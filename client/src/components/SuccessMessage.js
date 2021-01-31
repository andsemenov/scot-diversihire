import React from "react";
import { Message, Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const SuccessMessage = () => {
  return (
    <Segment className="success-message-all">
      <Message className="success-message">
        <Header as="h1" className="success-message-header">
          PROFILE SUBMITTED
        </Header>
        <p className="message-text">
          GREAT WORK! YOU'VE SUBMITTED YOUR PROFILE TO DIVERSIHIRE
        </p>
        <p className="message-text">
          NOW ALL YOU NEED TO DO IS TO LOGIN AND CHECK YOUR PROFILE EVERYNOW AND
          THEN.
        </p>
        <CustomButton
          className="white-background-button"
          title="View Inbox"
          as={Link}
          to="/applicant-inbox"
        />
      </Message>
    </Segment>
  );
};

export default SuccessMessage;
