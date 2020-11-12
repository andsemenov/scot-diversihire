const express = require("express");
const { createProfile } = require("../services/database/profile");
const {
  createWorkExperience
} = require("../services/database/work_experience");
const router = express.Router();
const { nanoid } = require("nanoid");
const passport = require("passport");

/** route is /profile/ (status is defined as prefix in index.js) */
router.post("/", async(req, res) => {
  try {
    const db_newProfile = req.body;
    const { experiences } = req.body;
    const response = await createProfile(db_newProfile);
    await experiences.forEach((experience) => {
      createWorkExperience({ ...experience, profile_id: response[0].id});
    });
    
    res.status(201).send("Profile created");
  } catch (error) {
    res.status(500).send("Error profile creation is unsuccessful");
  }
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const db_newProfile = req.body;
    db_newProfile.applicant_id = req.user.id;
    db_newProfile.profile_public_id = nanoid();

    createProfile(db_newProfile)
      .then((data) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
);

module.exports = router;
