const crypto = require('crypto');

function keyGenerator(size) {
  return crypto.randomBytes(size).toString('hex');
}

module.exports = keyGenerator;
