const getAllModel = require('../models/getAllModel');

module.exports = async () => {
  const list = await getAllModel();
  
  return list;
}