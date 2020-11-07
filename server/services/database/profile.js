const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createProfile = (profile) => {
  return pool
    .query(
      "INSERT INTO profile (job_title, bio, location) values ($1, $2, $3)",
      [profile.job_title, profile.bio, profile.location]
    )
    .then((result) => result.rows);
};

module.exports = {
  createProfile,
};
