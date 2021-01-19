import React, { useState, useEffect } from "react";
import { getMessagesByApplicantId } from "../api/messages";
import { Segment, Message } from "semantic-ui-react";

const ApplicantInbox = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessagesByApplicantId(user.id);
        setMessages(response || []);
      } catch (error) {
        setMessages([]);
      }
    };
    if (user && user.role === "applicant" && !messages.length) {
      fetchMessages();
    }
  }, [user, messages]);

  return (
    <div className="inbox-container">
      <Segment>
        <h1> Applicant Inbox </h1>
        {messages.map(message => (
          <Message>
            <div key={message.id}>
              Sender: {message.email}
              <p>Message: {message.message}</p>
            </div>
          </Message>
        ))}
      </Segment>
    </div>
  );
};

export default ApplicantInbox;
