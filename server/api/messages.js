const express = require("express");
const router = express.Router();

//POST /api/messages/profile/:public_profile_id -> STATUS: 201 created
router.post("/profile/:public_profile_id", (req, res) => {
  res.status(201).send("created");
});

router.get("/applicant/:user_id", (req, res) => {
  res.send([
    {
      from: "recruiter@cyf.org",
      message: "This is the text of the message",
      to: "<profile_public_id>",
    },
    {
      from: "recruiter@cyf.org",
      message: "This is the text of the 2nd message",
      to: "<profile_public_id_2>",
    },
  ]);
});

module.exports = router;
