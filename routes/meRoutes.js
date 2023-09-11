const express = require("express");
const router = express.Router();
const meController = require("../controllers/baseController");

router.get("/", meController.getOverview);

router.get("/me", meController.getMe);

module.exports = router;
