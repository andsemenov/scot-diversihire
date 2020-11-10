const express = require("express");
const { createProfile } = require("../services/database/profile");
const router = express.Router();
const { nanoid } = require("nanoid");
const passport = require("passport");

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
