require('dotenv').config();
const cors = require('cors');
const express = require('express');
const server = express();

const accessRouter = require('./src/routes/accessRouter');
const adminRouter = require('./src/routes/adminRouter');

server.use(cors());
server.use('/access', express.json(), accessRouter);
server.use('/admin', express.json(), adminRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${ process.env.PORT }`);
});