export const calculateAge = dateString => {
  const [day, month, year] = dateString.split('.');
  const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

  const date = new Date(isoDate);
  const today = new Date();
  const diffInMs = today.getTime() - date.getTime();
  const diffInMonths = Math.round(diffInMs / 2628000000);
  const diffInYears = Math.floor(diffInMonths / 12);
  const remainingMonths = diffInMonths % 12;

  let result = '';

  if (diffInYears === 1) {
    // result = 'one year';
    return 'one year';
  } else if (diffInYears > 1) {
    // result = `${diffInYears} years`;
    return `${diffInYears} years`;
  }

  if (remainingMonths === 1) {
    result = result ? `${result}, one month` : 'one month';
  } else if (remainingMonths > 1) {
    result = result
      ? `${result}, ${remainingMonths} months`
      : `${remainingMonths} months`;
  }

  return result;
};
