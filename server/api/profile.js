const express = require("express");
const { createProfile } = require("../services/database/profile");
const router = express.Router();

/** route is /profile/ (status is defined as prefix in index.js) */
router.post("/", (req, res) => {
  const db_newProfile = req.body;
  createProfile(db_newProfile);
  res.status(201).send("Profile created");
});

module.exports = router;
