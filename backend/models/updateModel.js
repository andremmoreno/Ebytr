const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, status) => {
  await (await connection()).collection('list').updateOne(
    { _id: ObjectId(id) },
    {
      $set: { status: status },
    },
  );
};