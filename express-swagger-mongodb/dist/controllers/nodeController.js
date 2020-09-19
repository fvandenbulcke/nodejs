'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _nodeService = require('../services/nodeService');

var _nodeService2 = _interopRequireDefault(_nodeService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infos = [{ id: 1, name: 'florian' }, { id: 2, name: 'jamie' }, { id: 3, name: 'julien' }, { id: 4, name: 'quentin' }];

/*
* Service controller for all infos getting
*/
exports.getInfo = function getInfo(req, res) {
  _nodeService2.default.getAllInfos().then(function (results) {
    res.send(results);
  });
};

/*
* Service controller for info getting
*/
exports.getInfoById = function getInfoById(req, res) {
  var infoId = req.swagger.params.infoId.value;
  _nodeService2.default.getInfoById(infoId).then(function (result) {
    res.send(result);
  });
};

/*
* Service controller for info creating
*/
exports.createInfo = function createInfo(req, res) {
  var newInfo = req.body;
  _nodeService2.default.createInfo(newInfo).then(function (results) {
    res.send(results);
  });
};

/*
* Service controller for info updating
*/
exports.updateInfo = function updateInfo(req, res) {
  var infoId = req.swagger.params.infoId.value;
  var body = req.body;

  _nodeService2.default.update(infoId, body).then(function (results) {
    res.send(results);
  });
};

/*
* Service controller for info deleting
*/
exports.deleteInfo = function deleteInfo(req, res) {
  var infoId = req.swagger.params.infoId.value;
  var rejectInfos = _lodash2.default.reject(infos, function (i) {
    var bool = i.id === infoId;return bool;
  }).flatMap(function (i) {
    var newI = _lodash2.default.cloneDeep(i);
    if (i.id > infoId) {
      newI.id -= 1;
    }
    return newI;
  });
  infos = rejectInfos;
  res.send(infos);
};