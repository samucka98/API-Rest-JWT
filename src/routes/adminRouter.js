const express = require('express');
const adminRouter = express.Router();

const AuthController = require('../controllers/AuthController');
const authController = new AuthController();

const UserController = require('../controllers/UserController');
const userController = new UserController();

adminRouter.get('/users', userController.index);
adminRouter.post('/users', authController.auth, userController.register);
adminRouter.delete('/users/:id', authController.auth, userController.delete);

module.exports = adminRouter;