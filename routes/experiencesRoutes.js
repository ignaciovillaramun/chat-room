const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experiencesController');

router.route('/').get(experienceController.getAll);
//   .post(experienceController.createUser);

// router
//   .route('/:id')
//   .get(experienceController.getOne)
//   .put(experienceController.updateUser)
//   .delete(experienceController.deleteUser);

module.exports = router;
