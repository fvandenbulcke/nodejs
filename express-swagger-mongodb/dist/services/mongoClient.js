'use strict';

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var mongoDbClient = void 0;

var db = {
  user: 'flo',
  pwd: 'vdb',
  table: 'kanban'
};
var options = {
  useNewUrlParser: true
};

function MongoPool() {}

function initPool() {
  MongoClient.connect('mongodb://' + db.user + ':' + db.pwd + '@localhost:27017/' + db.table, options, function (err, connection) {
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