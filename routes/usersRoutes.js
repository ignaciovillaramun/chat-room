const express = require('express');
const router = express.Router();
const userController = require('../controllers/googleUsersController');
const { ensureAuthenticated } = require('../controllers/authController');

router.get('/', (req, res) => {
  return res.json({
    data: 'hello from users',
  });
});

router.use(ensureAuthenticated);

router.route('/all').get(userController.getAll);

router
  .route('/:id')
  .get(userController.getOne)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
