export const sendMessage = message => {
  const postMessage = {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch("/api/messages/profile", postMessage).then(res => res.ok);
};

export const getRecruiterMessages = recruiter_id => {
  return fetch(`/api/messages/recruiter/${recruiter_id}`).then(res =>
    res.json()
  );
};

export const getMessagesByApplicantId = id => {
  return fetch(`/api/messages/applicant/${id}`).then(res => res.json());
};
