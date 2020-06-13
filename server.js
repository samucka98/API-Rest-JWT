require('dotenv').config();
const express = require('express');
const server = express();

server.post('/user', (req, res) => {
  console.log('Rota de usuários acessada!');
  res.send('Rota de usuários!');
});

server.post('/admin', (req, res) => {
  console.log('Roda de administrador acessada!');
  res.send('Rota de administrador!');
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${ process.env.PORT }`);
});