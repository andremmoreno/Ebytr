const deleteModel = require('../models/deleteModel');

module.exports = async (id) => {
  deleteModel(id);
}
