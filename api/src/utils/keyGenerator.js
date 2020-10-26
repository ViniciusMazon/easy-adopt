const crypto = require('crypto');

function keyGenerator() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = keyGenerator;
