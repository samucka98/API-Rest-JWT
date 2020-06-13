require('dotenv').config();
const express = require('express');
const userRouter = require('./src/routes/userRouter');
const adminRouter = require('./src/routes/adminRouter');
const server = express();

server.use('/user', userRouter);
server.use('/admin', adminRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${ process.env.PORT }`);
});