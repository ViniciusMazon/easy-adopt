const keyGenerator = require('../../src/utils/keyGenerator');

describe('KeyGenerator', () => {
  it('Should generate a key', () => {
    const key = keyGenerator();
    expect(key.length).toEqual(16);
  });
});
