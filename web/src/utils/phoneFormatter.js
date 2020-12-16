export default function phoneFormatter(phone) {
  let phoneFormatted = '';

  if (phone.length === 1) {
    phoneFormatted = '(' + phone;
    return phoneFormatted;
  } else if (phone.length === 3) {
    phoneFormatted = phone + ') ';
    return phoneFormatted;
  } else if (phone.length === 10) {
    phoneFormatted = phone + '-';
    return phoneFormatted;
  }

  return phone;
}
