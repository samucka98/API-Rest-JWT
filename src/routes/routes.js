const express = require('express');
const routes = express();

const Auth = require('../middlewares/Auth');
const auth = new Auth();

const accessRouter = require('./accessRouter');
const adminRouter = require('./adminRouter');

routes.use('/access', accessRouter);
routes.use('/admin', auth.jwtAuth, adminRouter);

module.exports = routes;