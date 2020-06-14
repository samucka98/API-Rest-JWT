const express = require('express');
const adminRouter = express.Router();

const AuthController = require('../controllers/AuthController');
const authController = new AuthController();

const UserController = require('../controllers/UserController');
const userController = new UserController();

adminRouter.post('/register', userController.register);

module.exports = adminRouter;