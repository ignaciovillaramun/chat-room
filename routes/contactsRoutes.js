const express = require("express");
const router = express.Router();
const meController = require("../controllers/contactsController");

router.get("/", meController.getAll);
router.get("/:id", meController.getOne);

module.exports = router;
