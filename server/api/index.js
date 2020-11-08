const express = require("express");
const router = express.Router();

const users = require("./users");
const status = require("./status");
const profile = require("./profile");

router.use("/users", users);
router.use("/status", status);
router.use("/profile", profile);

module.exports = router;
