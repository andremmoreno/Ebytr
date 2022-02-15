const createModel = require('../models/createModel')

module.exports = async (body) => {
  const { name } = body;

  const entity = {
    name,
    status: 'em andamento',
    date: new Date(),
  };

  createModel(entity);
}