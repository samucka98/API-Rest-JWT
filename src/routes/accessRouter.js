const express = require('express');
const accessRouter = express.Router();

const AuthController = require('../controllers/AuthController');
const authController = new AuthController();

const AccessController = require('../controllers/AccessController');
const accessController = new AccessController();

accessRouter.post('/login', accessController.login);

module.exports = accessRouter;