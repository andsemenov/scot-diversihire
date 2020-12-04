import React from "react";
import { Message, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <div>
      <Message>
        <h3>Great! You have successfully created a profile!</h3>
        <Button primary as={Link} to="/applicant-inbox">
          View Inbox
        </Button>
      </Message>
    </div>
  );
};

export default SuccessMessage;
