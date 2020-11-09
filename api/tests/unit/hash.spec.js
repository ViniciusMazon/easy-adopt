const hash = require('../../src/utils/hash');

describe('Hash', () => {
  describe('Encrypt', () => {
    it('Should encrypt a password', async () => {
      const password = 'myStrongPassword';
      const hash_password = await hash.encrypt(password);
      expect(hash_password).not.toEqual(password);
    });
  });

  describe('Compare', () => {
    it('Should compare an encrypted password', async () => {
      const password = 'myStrongPassword';
      const hash_password = await hash.encrypt(password);
      const result = await hash.compare(hash_password, password);
      expect(result).toBe(true);
    });
    it('Should refuse divergent passwords', async () => {
      const password = 'myStrongPassword';
      const hash_password = await hash.encrypt(password);
      const fakePassword = 'myFakePassword';
      const result = await hash.compare(hash_password, fakePassword);
      expect(result).toBe(false);
    });
  });
});
