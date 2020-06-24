const express = require('express');
const accessRouter = express.Router();

const AccessController = require('../controllers/AccessController');
const accessController = new AccessController();

accessRouter.post('/login', accessController.login);

module.exports = accessRouter;