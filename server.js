require('dotenv').config();
const cors = require('cors');
const Routes = require('./src/routes/routes');
const express = require('express');
const path = require('path');
const server = express();

server.use(cors());
server.use(express.json());

server.use('/dashboard', Routes.accessRouter);
server.use('/dashboard', Routes.adminRouter);

server.use('/uploads', express.static(path.resolve(__dirname, 'src', 'uploads')));

server.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${ process.env.PORT }`);
});