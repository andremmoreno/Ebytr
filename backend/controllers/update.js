const updateService = require('../services/updateService');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  await updateService(id, body);

  res.status(200).end();
}