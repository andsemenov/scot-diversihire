const express = require("express");
const router = express.Router();

const users = require("./users");
const status = require("./status");
const profiles = require("./profiles");

router.use("/users", users);
router.use("/status", status);
router.use("/profiles", profiles);

module.exports = router;
