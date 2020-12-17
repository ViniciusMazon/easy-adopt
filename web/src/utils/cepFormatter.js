export default function cepFormatter(cep) {
  let cepFormatted = '';

  if (cep.length === 2) {
    cepFormatted = cep + '.';
    return cepFormatted;
  } else if (cep.length === 6) {
    cepFormatted = cep + '-';
    return cepFormatted;
  }
  return cep;
}
