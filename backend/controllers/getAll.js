const getAllService = require('../services/getAllService');

module.exports = async (req, res, _next) => {
  const list = await getAllService();

  res.status(200).json(list);
}