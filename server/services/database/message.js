const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createMessage = ({ recruiter_email, profile_public_id, message }) => {
  return pool.query(
    "INSERT INTO message (recruiter_email, profile_public_id, message) values ($1, $2, $3)",
    [recruiter_email, profile_public_id, message],
  );
};

const getMessagesByApplicantId = (id) => {
  return pool
    .query("SELECT * FROM message WHERE applicant_id=$1", [id])
    .then((result) => result.rows);
};

module.exports = {
  createMessage,
  getMessagesByApplicantId,
};
