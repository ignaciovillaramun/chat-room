const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationsController');

router.route('/').get(educationController.getAll);
//   .post(educationController.createUser);

// router
//   .route('/:id')
//   .get(educationController.getOne)
//   .put(educationController.updateUser)
//   .delete(educationController.deleteUser);

module.exports = router;
