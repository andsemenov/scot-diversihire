const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createProfile = (profile) => {
  return pool
    .query(
      "INSERT INTO profile (job_title, bio, location, employment_status) values ($1, $2, $3, $4) returning *",
      [
        profile.job_title,
        profile.bio,
        profile.location,
        profile.employment_status,
      ]
    )
    .then((result) => result.rows);
};

module.exports = {
  createProfile,
};
