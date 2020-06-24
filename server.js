require('dotenv').config();
const path = require('path');
const cors = require('cors');
const routes = require('./src/routes/routes');
const express = require('express');
const server = express();

server.use(cors());
server.use(express.json());
server.use('/dashboard', routes);

server.use('/uploads', express.static(path.resolve(__dirname, 'src', 'uploads')));

server.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${ process.env.PORT }`);
});