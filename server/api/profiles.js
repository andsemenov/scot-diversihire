const express = require("express");
const {
	createProfile,
	getAllProfiles,
	getProfileById,
	getEducationById,
	getWorkExperiencesById,
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

router.get("/:public_id", (req, res) => {
	const id = req.params.public_id;
	getProfileById(id)
		.then(profile => {
			const profileId = profile[0].id;

			getEducationById(profileId)
				.then(educations => {
					getWorkExperiencesById(profileId)
						.then(experiences => {
							const result = profile.map(profile => {
								return {
									...profile,
									education: educations,
									work_experience: experiences,
								};
							});
							res.send(result);
						})
						.catch(err => {
							console.error(err);
							res.send(500);
						});
				})
				.catch(err => {
					console.error(err);
					res.send(500);
				});
		})
		.catch(err => {
			console.error(err);
			res.send(500);
		});
});

module.exports = router;
