const updateModel = require('../models/updateModel');

module.exports = async (id, body) => {
  const { status } = body;

  await updateModel(id, status);
}