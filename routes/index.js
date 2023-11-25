const routes = require('express').Router();
const user = require('./usersRoutes');
const replies = require('./repliesRoutes');
const posts = require('./postsRoutes');
const likes = require('./likesRoutes');

routes.use('/', require('./swagger'));
routes.use('/users', user);
routes.use('/replies', replies);
routes.use('/posts', posts);
routes.use('/likes', likes);

module.exports = routes;
