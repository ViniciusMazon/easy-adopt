const { currencyFormatter } = require('../../src/utils/currencyFormatter');

describe('CurrencyFormatter', () => {
  describe('Formatting values', () => {
    it('Should format a value', () => {
      const value = 100.0;
      const formattedValue = currencyFormatter(value);
      expect(formattedValue).toEqual('R$ 100.00');
    });
  });
});
