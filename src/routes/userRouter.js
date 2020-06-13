const express = require('express');
const userRouter = express.Router();

const UserController = require('../controllers/UserController');
const userController = new UserController;

userRouter.post('/register', userController.register);

userRouter.post('/login', (req, res) => {
  console.log('Rota de usuários/login acessada!');
  res.send('Login de usuário.');
});

module.exports = userRouter;