const generateUnixUTC = (timestamp) => {
  const newDate = new Date(Number(timestamp));
  const utc = newDate.toUTCString();
  const dateInUnixAndUTC = {
    unix: Date.parse(newDate),
    utc,
  };

  return dateInUnixAndUTC;
};

module.exports ={ generateUnixUTC };
