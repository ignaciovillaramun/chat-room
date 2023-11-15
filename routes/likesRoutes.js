const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likesController');

router.get('/', (req, res) => {
  return res.json({
    data: 'hello from likes',
  });
});

router.route('/all').get(likesController.getAll);
router.route('/create').post(likesController.createLike);

router
  .route('/:id')
  .get(likesController.getOne)
  .put(likesController.updateLike)
  .delete(likesController.deleteLike);

module.exports = router;
