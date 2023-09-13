const express = require("express");
const router = express.Router();
const meController = require("../controllers/contactsController");

router.get("/all", meController.getAll);
router.get("id/:id", meController.getOne);

module.exports = router;
