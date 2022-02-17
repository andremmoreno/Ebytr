const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) =>
  (await connection()).collection('list').deleteOne(
    { _id: ObjectId(id) },
  );