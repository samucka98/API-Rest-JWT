const express = require('express');
const routes = express();

const accessRouter = require('./accessRouter');
const adminRouter = require('./adminRouter');

routes.use('/access', accessRouter);
routes.use('/admin', adminRouter);

module.exports = routes;