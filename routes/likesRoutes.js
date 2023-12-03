const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likesController');
const { ensureAuthenticated } = require('../controllers/authController');

router.get('/', (req, res) => {
  return res.json({
    data: 'hello from likes',
  });
});

router.use(ensureAuthenticated);

router.route('/all').get(likesController.getAll);
router.route('/create').post(likesController.createLike);

router
  .route('/:id')
  .get(likesController.getOne)
  .put(likesController.updateLike)
  .delete(likesController.deleteLike);

module.exports = router;
