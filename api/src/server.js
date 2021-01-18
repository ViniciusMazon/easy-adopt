require('dotenv').config({ path: '.env' });
const server = require('./app');

server.listen(process.env.PORT || 3333, () =>
  console.log('⚡️  Server running on port 3333')
);
