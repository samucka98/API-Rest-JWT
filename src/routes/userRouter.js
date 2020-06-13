const express = require('express');
const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  console.log('Rota de usuários/register acessada!');
  res.send('Registro de usuário.');
});

userRouter.post('/login', (req, res) => {
  console.log('Rota de usuários/login acessada!');
  res.send('Login de usuário.');
});

module.exports = userRouter;