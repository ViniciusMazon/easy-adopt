export default function birthDateFormatter(date) {
  let dateFormatted = '';

  if (date.length === 2 || date.length === 5) {
    dateFormatted = date + '/';
    return dateFormatted;
  }

  return date;
}
