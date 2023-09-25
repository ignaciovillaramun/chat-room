const routes = require('express').Router();
const user = require('./usersRoutes');

routes.use('/', require('./swagger'));
routes.use('/users', user);

module.exports = routes;
