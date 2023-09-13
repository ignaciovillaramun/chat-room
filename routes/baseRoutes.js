const express = require("express");
const router = express.Router();
const meController = require("../controllers/baseController");

router.get("/", meController.getOverview);

router.get("/someone", meController.getSomeone);

module.exports = router;
