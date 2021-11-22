const DateModel = require('../services/dateService');

const generateDate = (req, res) => {
  let { date } = req.params;
  if (!date) date = Date.now();
  const result = DateModel.generateDate(date);

  return res.status(200).json(result);
};

module.exports = { generateDate };
