const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createMessage = ({ recruiter_id, profile_public_id, message }) => {
  return pool.query(
    "INSERT INTO message (recruiter_id, profile_public_id, message) values ($1, $2, $3)",
    [recruiter_id, profile_public_id, message],
  );
};

const getMessagesByApplicantId = (id) => {
  return pool
    .query(
      "SELECT message.*, users.email FROM message INNER JOIN profile ON profile.profile_public_id=message.profile_public_id"
        + " INNER JOIN users ON message.recruiter_id=users.id"
        + " WHERE profile.applicant_id=$1",
      [id],
    )
    .then((result) => result.rows);
};

module.exports = {
  createMessage,
  getMessagesByApplicantId,
};
