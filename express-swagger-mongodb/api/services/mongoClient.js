const { MongoClient } = require('mongodb');

let mongoDbClient;

const db = {
  user: 'flo',
  pwd: 'vdb',
  table: 'kanban',
  url: 'localhost:27017',
};
const options = {
  useNewUrlParser: true,
};

function MongoPool() { }

function initPool() {
  MongoClient.connect(`mongodb://${db.user}:${db.pwd}@${db.url}/${db.table}`, options, (err, connection) => {
    if (err) throw err;
    mongoDbClient = connection.db('kanban');
  });
  return MongoPool;
}


function getInstance() {
  return mongoDbClient;
}

MongoPool.initPool = initPool;
MongoPool.getInstance = getInstance;

module.exports = MongoPool;
