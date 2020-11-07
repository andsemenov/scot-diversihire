const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createProfile = (profile) => {
  return pool
    .query(
      "INSERT INTO profile (profile.bio, profile.location) values ($1, $2)",
      [bio, location]
    )
    .then((result) => result.rows);
};

module.exports = {
  createProfile,
};
