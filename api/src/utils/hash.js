const bcrypt = require('bcrypt');

module.exports = {
  async encrypt(password) {
    const hash_password = await bcrypt.hash(password, 10);
    return hash_password;
  },
  async compare(hash_password, password) {
    const isValid = await bcrypt.compare(password, hash_password);
    return isValid;
  },
};
