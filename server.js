require('dotenv').config();
const express = require('express');
const userRouter = require('./src/routes/userRouter');
const server = express();

server.use('/user', userRouter);

server.post('/admin', (req, res) => {
  console.log('Roda de administrador acessada!');
  res.send('Rota de administrador!');
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${ process.env.PORT }`);
});