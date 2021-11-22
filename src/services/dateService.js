const { generateUnixUTC } = require('../helpers/generateUnixUtcDate');

const generateDate = (date) => {
  let timestamp = '';

  if (isNaN(Date.parse(date))) {
    timestamp = date
  } else {
    timestamp = Date.parse(date);
  }

  const result = generateUnixUTC(timestamp);
  return result;
}

module.exports = { generateDate };