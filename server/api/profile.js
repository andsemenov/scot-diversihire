const express = require("express");
const { createProfile } = require("../services/database/profile");
const {
  createWorkExperience
} = require("../services/database/work_experience");
const router = express.Router();
const { nanoid } = require("nanoid");
const passport = require("passport");

/** route is /profile/ (status is defined as prefix in index.js) */
router.post("/", passport.authenticate("jwt", { session: false }), async(req, res) => {
  try {
    const db_newProfile = req.body;
    db_newProfile.applicant_id = req.user.id;
    db_newProfile.profile_public_id = nanoid();
    const { experiences } = req.body;
    const response = await createProfile(db_newProfile);
    await experiences.forEach((experience) => {
      createWorkExperience({ ...experience, profile_id: response[0].id });
    });
    
    res.status(201).send("Profile created");
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Error profile creation is unsuccessful");
  }
});

module.exports = router;
