const path = require('path');

module.exports = {
  client: 'sqlite3',

  connection: {
    filename: path.resolve(__dirname, 'src', 'models', 'database', 'db.sqlite')
  },

  migrations: {
    directory: path.resolve(__dirname, 'src', 'models', 'migrations')
  },

  useNullAsDefault: true
};