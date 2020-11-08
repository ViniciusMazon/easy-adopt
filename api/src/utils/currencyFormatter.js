module.exports = {
  currencyFormatter(currency) {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(currency);

    return formattedValue;
  },
};
