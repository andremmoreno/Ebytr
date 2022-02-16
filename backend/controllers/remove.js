const deleteService = require('../services/deleteService');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  await deleteService(id);

  res.status(202).end();
}