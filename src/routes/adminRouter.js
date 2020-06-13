const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  console.log('Rota de administrador acessada!');
  res.send('Área administrativa do sistema.');
});

module.exports = adminRouter;