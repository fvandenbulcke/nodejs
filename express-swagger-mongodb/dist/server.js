'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _swaggerExpressMw = require('swagger-express-mw');

var _swaggerExpressMw2 = _interopRequireDefault(_swaggerExpressMw);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _yamljs = require('yamljs');

var _yamljs2 = _interopRequireDefault(_yamljs);

var _mongoClient = require('./services/mongoClient');

var _mongoClient2 = _interopRequireDefault(_mongoClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

// Constants
var PORT = 8080;
var HOST = '0.0.0.0';

var swaggerDescription = _yamljs2.default.load('./api/swagger/swagger.yaml');
app.use('/api-docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(swaggerDescription));

var swaggerConfig = {
  appRoot: '.',
  swagger: 'api/swagger/swagger.yaml'
};
// swagger || swaggerFile to choose swagger.json instead of api/swagger/swagger.yaml


_swaggerExpressMw2.default.create(swaggerConfig, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }
  // install middleware
  swaggerExpress.register(app);
  app.listen(PORT, HOST, function () {
    console.log('Running on http://' + HOST + ':' + PORT);
  });
});

// Initilisation de la connection à la bdd
_mongoClient2.default.initPool();

module.exports = { app: app };