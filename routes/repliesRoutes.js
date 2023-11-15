const express = require('express');
const router = express.Router();
const repliesController = require('../controllers/repliesController');

router.get('/', (req, res) => {
  return res.json({
    data: 'hello from replies',
  });
});

router.route('/all').get(repliesController.getAll);
router.route('/create').post(repliesController.createReply);

router
  .route('/:id')
  .get(repliesController.getOne)
  .put(repliesController.updateReply)
  .delete(repliesController.deleteReply);

module.exports = router;
