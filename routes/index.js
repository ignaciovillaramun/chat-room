const routes = require('express').Router();
const user = require('./usersRoutes');
const replies = require('./repliesRoutes');
const posts = require('./postsRoutes');
// const education = require('./educationsRoutes');
// const experience = require('./experiencesRoutes');

routes.use('/', require('./swagger'));
routes.use('/users', user);
routes.use('/replies', replies);
routes.use('/posts', posts);
// routes.use('/educations', education);
// routes.use('/experiences', experience);

module.exports = routes;
