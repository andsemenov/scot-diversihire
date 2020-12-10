import React from "react";
import { Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const SuccessMessage = () => {
  return (
    <div>
      <Message>
        <h3>Great! You have successfully created a profile!</h3>
        <CustomButton title="View Inbox" as={Link} to="/applicant-inbox" />
      </Message>
    </div>
  );
};

export default SuccessMessage;
