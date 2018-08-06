'use strict';

var _nodeController = require('../controllers/nodeController');

var _nodeController2 = _interopRequireDefault(_nodeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function routes(app) {
  app.route('/nodejs').get(_nodeController2.default.getInfo).post(_nodeController2.default.createInfo).put(_nodeController2.default.updateInfo).delete(_nodeController2.default.deleteInfo);
};