var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hello User" });
});

router.get("/health", function (req, res, next) {
  res.send("Up and Running.");
});

module.exports = router;
