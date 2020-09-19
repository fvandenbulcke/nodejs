'use strict';

var _mongodb = require('mongodb');

var _mongoClient = require('./mongoClient');

var _mongoClient2 = _interopRequireDefault(_mongoClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
// https://zestedesavoir.com/tutoriels/312/debuter-avec-mongodb-pour-node-js/#4-11691_operations-depuis-nodejs
// https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application


exports.createInfo = function createInfo(newInfo) {
  var _this = this;

  var db = _mongoClient2.default.getInstance();
  return db.collection('info').insert(newInfo).then(function () {
    return _this.getAllInfos();
  });
};

exports.getAllInfos = function getAllInfos() {
  var db = _mongoClient2.default.getInstance();
  return db.collection('info').find().toArray();
};

exports.getInfoById = function getInfoById(infoId) {
  var db = _mongoClient2.default.getInstance();
  return db.collection('info').findOne({ _id: new _mongodb.ObjectId(infoId) });
};

exports.update = function update(infoId, newInfo) {
  var _this2 = this;

  /* const { identifier, lastName } = newInfo;
  const upd = {
    _id: new ObjectId(infoId),
    identifier,
    lastName,
  }; */
  var upd = {
    _id: new _mongodb.ObjectId(infoId),
    ...newInfo
  };
  var db = _mongoClient2.default.getInstance();
  return db.collection('info').save(upd).then(function () {
    return _this2.getAllInfos();
  });
};