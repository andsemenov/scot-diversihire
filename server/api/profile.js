const express = require("express");
const router = express.Router();

/** route is /profile/ (status is defined as prefix in index.js) */
router.post("/", (req, res) => {
  console.log(req);
  console.log(res);
  res.send("All good");
});

module.exports = router;
