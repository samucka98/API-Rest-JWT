const express = require('express');
const adminRouter = express.Router();

const AuthController = require('../controllers/AuthController');
const authController = new AuthController();

const UserController = require('../controllers/UserController');
const userController = new UserController();

adminRouter.post('/register', authController.auth, userController.register);
adminRouter.get('/users', userController.index);
adminRouter.delete('/user/:id', userController.delete);

module.exports = adminRouter;