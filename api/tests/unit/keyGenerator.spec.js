const keyGenerator = require('../../src/utils/keyGenerator');

describe('Utils / KeyGenerator', () => {
  it('Should generate a key', () => {
    const key = keyGenerator();
    expect(key.length).toEqual(16);
  });
});
