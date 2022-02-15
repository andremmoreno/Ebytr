const createService = require('../services/createService');

module.exports = async (req, res, _next) => {
  const { body } = req;

  const list = await createService(body);

  res.status(201).end();
}