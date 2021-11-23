const checkIsValidDate = (req, res, next) => {
  const { date } = req.params;

  if(!date) return next();
  let newDate;

  if (date.split('-').length === 3) {
    newDate = Date.parse(date)
  } else {
    newDate = date;
  };

  const checkDate = new Date(parseInt(newDate)); 
  
  if (checkDate.toString() === 'Invalid Date') return res.status(400).json({ error : "Invalid Date" });
   
  next();
}

module.exports = { checkIsValidDate };
