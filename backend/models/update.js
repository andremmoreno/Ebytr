const connection = require('./connection');

module.exports = async (document) => {
  const { _id, ...documentWithoutId } = document;

  await (await connection()).collection('list').updateOne(
    { _id: { $eq: _id } },
    {
      $set: documentWithoutId,
    },
  );

  return document;
};