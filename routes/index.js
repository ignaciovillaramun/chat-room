const routes = require('express').Router();
const user = require('./usersRoutes');
// const education = require('./educationsRoutes');
// const experience = require('./experiencesRoutes');

routes.use('/', require('./swagger'));
routes.use('/users', user);
// routes.use('/educations', education);
// routes.use('/experiences', experience);

module.exports = routes;
