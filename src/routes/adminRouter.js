const express = require('express');
const adminRouter = express.Router();

const Auth = require('../middlewares/Auth');
const auth = new Auth();

const UserController = require('../controllers/UserController');
const userController = new UserController();

adminRouter.get('/users', userController.index);
adminRouter.post('/users', auth.jwtAuth, userController.register);
adminRouter.put('/users/:id', auth.jwtAuth, userController.update);
adminRouter.delete('/users/:id', auth.jwtAuth, userController.delete);

module.exports = adminRouter;