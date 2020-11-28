const express = require("express");
const router = express.Router();

const users = require("./users");
const status = require("./status");
const profiles = require("./profiles");
const messages = require("./messages");

router.use("/users", users);
router.use("/status", status);
router.use("/profiles", profiles);
router.use("/messages", messages);

module.exports = router;
