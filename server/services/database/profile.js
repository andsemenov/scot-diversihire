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

const getProfileById = (profileId) => {
	return pool
		.query("SELECT * FROM profile WHERE profile_public_id=$1", [profileId])
		.then((result) => result.rows);
};

const getEducationById = (profileId) => {
	return pool
		.query("SELECT * FROM education WHERE profile_id=$1", [profileId])
		.then((result) => result.rows);
};

const getWorkExperiencesById = (profileId) => {
	return pool
		.query("SELECT * FROM work_experience WHERE profile_id=$1", [profileId])
		.then((result) => result.rows);
};

module.exports = {
	createProfile,
	getAllProfiles,
	getProfileById,
	getEducationById,
	getWorkExperiencesById,
};
