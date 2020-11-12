const express = require("express");
const { createProfile } = require("../services/database/profile");
const {
  createWorkExperience
} = require("../services/database/work_experience");
const router = express.Router();

/** route is /profile/ (status is defined as prefix in index.js) */
router.post("/", async(req, res) => {
  try {
    const db_newProfile = req.body;
    const { experiences } = req.body;
    await experiences.forEach((experience) => {
      createWorkExperience(experience);
    });
    await createProfile(db_newProfile);
    res.status(201).send("Profile created");
  } catch (error) {
    res.status(500).send("Error profile creation is unsuccessful");
  }
});

module.exports = router;
