import { ObjectId } from 'mongodb';
import MongoPool from './mongoClient';

// https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
// https://zestedesavoir.com/tutoriels/312/debuter-avec-mongodb-pour-node-js/#4-11691_operations-depuis-nodejs
// https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application


exports.createInfo = function createInfo(newInfo) {
  const db = MongoPool.getInstance();
  return db.collection('info').insert(newInfo)
    .then(() => this.getAllInfos());
};

exports.getAllInfos = function getAllInfos() {
  const db = MongoPool.getInstance();
  return db.collection('info').find().toArray();
};

exports.getInfoById = function getInfoById(infoId) {
  const db = MongoPool.getInstance();
  return db.collection('info').findOne({ _id: new ObjectId(infoId) });
};

exports.update = function update(infoId, newInfo) {
  const upd = {
    _id: new ObjectId(infoId),
    ...newInfo,
  };
  const db = MongoPool.getInstance();
  return db.collection('info').save(upd)
    .then(() => this.getAllInfos());
};

exports.delete = function deleteInfo(infoId) {
  const db = MongoPool.getInstance();
  return db.collection('info').remove({ _id: new ObjectId(infoId) })
    .then(() => this.getAllInfos());
};
