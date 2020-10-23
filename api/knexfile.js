const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'admin',
      password: 'password',
      database: 'easyAdopt',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'test.sqlite'),
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
};

