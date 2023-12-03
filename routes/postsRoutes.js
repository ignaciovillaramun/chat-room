const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { ensureAuthenticated } = require('../controllers/authController');

router.use(ensureAuthenticated);

router.get('/', (req, res) => {
  return res.json({
    data: 'hello from posts',
  });
});

router.route('/all').get(postsController.getAll);
router.route('/create').post(postsController.createPost);

router
  .route('/:id')
  .get(postsController.getOne)
  .put(postsController.updatePost)
  .delete(postsController.deletePost);

module.exports = router;
