const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createProfile = (profile) => {
	return pool
		.query(
			"INSERT INTO profile (profile_public_id, applicant_id, job_title, bio, location, employment_status) values ($1, $2, $3, $4, $5, $6) returning *",
			[
				profile.profile_public_id,
				profile.applicant_id,
				profile.job_title,
				profile.bio,
				profile.location,
				profile.employment_status,
			],
		)
		.then((result) => result.rows);
};

const getAllProfiles = () => {
	return pool.query("SELECT * FROM profile").then((result) => result.rows);
};

const getAllEducation = () => {
	return pool.query("SELECT * FROM education").then((result) => result.rows);
};

const getAllWorkExperiences = () => {
	return pool
		.query("SELECT * FROM work_experience")
		.then((result) => result.rows);
};

module.exports = {
	createProfile,
	getAllProfiles,
	getAllEducation,
	getAllWorkExperiences,
};
