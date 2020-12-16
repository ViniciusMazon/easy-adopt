export default function cpfFormatter(cpf) {
  let cpfFormatted = '';

  if (cpf.length === 3 || cpf.length === 7) {
    cpfFormatted = cpf + '.';
    return cpfFormatted;
  } else if (cpf.length === 11) {
    cpfFormatted = cpf + '-';
    return cpfFormatted;
  }
  return cpf;
}
