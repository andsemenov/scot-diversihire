const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessagesByApplicantId,
  getMessagesByRecruiterId,
} = require("../services/database/message");

router.post("/profile", async (req, res) => {
  const message = req.body;
  try {
    await createMessage(message);
    res.status(201).send("message is created");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/recruiter/:recruiter_id", async (req, res) => {
  const id = req.params.recruiter_id;
  try {
    let messages = await getMessagesByRecruiterId(id);
    res.send(messages);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/applicant/:user_id", async (req, res) => {
  const id = req.params.user_id;
  try {
    let messages = await getMessagesByApplicantId(id);
    res.send(messages);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
