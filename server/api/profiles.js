const express = require("express");
const {
	createProfile,
	getAllProfiles,
	getAllEducation,
	getAllWorkExperiences,
} = require("../services/database/profile");
const {
	createWorkExperience,
} = require("../services/database/work_experience");
const router = express.Router();
const { nanoid } = require("nanoid");
const passport = require("passport");

/** route is /profile/ (status is defined as prefix in index.js) */
router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const db_newProfile = req.body;
			db_newProfile.applicant_id = req.user.id;
			db_newProfile.profile_public_id = nanoid();
			const { experiences } = req.body;
			const response = await createProfile(db_newProfile);
			await experiences.forEach(experience => {
				createWorkExperience({ ...experience, profile_id: response[0].id });
			});

			res.status(201).send("Profile created");
		} catch (error) {
			console.log("error", error);
			res.status(500).send("Error profile creation is unsuccessful");
		}
	}
);

router.get("/", (req, res) => {
	getAllProfiles()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			console.error(err);
			res.send(500);
		});
});

router.get("/edu", (req, res) => {
	getAllEducation()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			console.error(err);
			res.send(500);
		});
});

router.get("/:id", (req, res) => {
	const id = req.params.id;
	getAllProfiles().then(profiles => {
		const userProfiles = profiles.filter(p => p.applicant_id == id);
		const profileIds = userProfiles.map(profile => profile.id);

		getAllEducation().then(educations => {
			const userEdu = educations.filter(edu =>
				profileIds.includes(edu.profile_id)
			);
			getAllWorkExperiences().then(experiences => {
				const userExp = experiences.filter(exp =>
					profileIds.includes(exp.profile_id)
				);
				const result = userProfiles.map(profile => {
					return {
						...profile,
						education: userEdu,
						work_experience: userExp,
					};
				});
				res.send(result);
			});
		});
	});
});

module.exports = router;
