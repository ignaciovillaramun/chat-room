const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router
  .route("/")
  .get(contactController.getAll)
  .post(contactController.createContact);

router
  .route("/:id")
  .get(contactController.getOne)
  .patch(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
