const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createWorkExperience = (experience) => {
  return pool
    .query(
      "INSERT INTO work_experience (profile_id, company, job_title, description, start_date, end_date) values ($1, $2, $3, $4, $5, $6)",
      [
        experience.profile_id,
        experience.company,
        experience.job_title,
        experience.description,
        experience.start_date,
        experience.end_date,
      ]
    )
    .then((result) => result.rows);
};

module.exports = {
  createWorkExperience,
};
