const express = require('express');
const router = express.Router();
const contactController = require('../controllers/usersController');

router
  .route('/')
  .get(contactController.getAll)
  .post(contactController.createContact);

router
  .route('/:id')
  .get(contactController.getOne)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
