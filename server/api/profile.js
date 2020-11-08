const express = require("express");
const { createProfile } = require("../services/database/profile");
const router = express.Router();

/** route is /api/profile/ (status is defined as prefix in index.js) */
router.post("/", (req, res) => {
  const db_newProfile = req.body;
  createProfile(db_newProfile)
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
