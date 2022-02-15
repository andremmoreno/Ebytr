const connection = require('./connection');

module.exports = async () => {
  return (await connection()).collection('list').find().toArray();
}