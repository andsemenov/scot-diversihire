const express = require("express");
const {
  createProfile,
  getAllProfiles,
  getProfileByPublicId,
  getProfileByApplicantId,
} = require("../services/database/profile");
const {
  createWorkExperience,
  getWorkExperiencesByProfileId,
  getEducationsByProfileId,
} = require("../services/database/work_experience");
const router = express.Router();
const { nanoid } = require("nanoid");
const passport = require("passport");

/** route is api/profiles/ (status is defined as prefix in index.js) */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const db_newProfile = req.body;
      db_newProfile.applicant_id = req.user.id;
      db_newProfile.profile_public_id = nanoid();
      const { experiences } = req.body;
      const newProfile = await createProfile(db_newProfile);
      await Promise.all(
        experiences.map(experience =>
          createWorkExperience({ ...experience, profile_id: newProfile.id })
        )
      );
      res.status(201).send("Profile created");
    } catch (error) {
      console.log("error", error);
      res.status(500).send("Error profile creation is unsuccessful");
    }
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.role === "recruiter") {
      getAllProfiles()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.error(err);
          res.send(500);
        });
    } else {
      res.status(403).send("User must have the recruiter role");
    }
  }
);

router.get("/:public_id", async (req, res) => {
  const id = req.params.public_id;
  try {
    let profile = await getProfileByPublicId(id);

    if (profile == null) {
      return res.sendStatus(404);
    }

    const profileId = profile.id;

    profile = {
      ...profile,
      educations: await getEducationsByProfileId(profileId),
      experiences: await getWorkExperiencesByProfileId(profileId),
    };

    res.send(profile);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/applicant/:applicant_id", async (req, res) => {
  const id = req.params.applicant_id;
  try {
    let profile = await getProfileByApplicantId(id);

    if (profile === null || !profile.length) {
      profile = [];
    }
    res.send(profile);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
