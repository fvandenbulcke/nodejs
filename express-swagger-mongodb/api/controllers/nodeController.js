import _ from 'lodash';
import nodeService from '../services/nodeService';

let infos = [
  { id: 1, name: 'florian' },
  { id: 2, name: 'jamie' },
  { id: 3, name: 'julien' },
  { id: 4, name: 'quentin' },
];

/*
* Service controller for all infos getting
*/
exports.getInfo = function getInfo(req, res) {
  nodeService.getAllInfos()
    .then((results) => {
      res.send(results);
    });
};

/*
* Service controller for info getting
*/
exports.getInfoById = function getInfoById(req, res) {
  const infoId = req.swagger.params.infoId.value;
  nodeService.getInfoById(infoId)
    .then((result) => {
      res.send(result);
    });
};


/*
* Service controller for info creating
*/
exports.createInfo = function createInfo(req, res) {
  const newInfo = req.body;
  nodeService.createInfo(newInfo)
    .then((results) => {
      res.send(results);
    });
};

/*
* Service controller for info updating
*/
exports.updateInfo = function updateInfo(req, res) {
  const infoId = req.swagger.params.infoId.value;
  const { body } = req;
  nodeService.update(infoId, body)
    .then((results) => {
      res.send(results);
    });
};


/*
* Service controller for info deleting
*/
exports.deleteInfo = function deleteInfo(req, res) {
  const infoId = req.swagger.params.infoId.value;
  nodeService.delete(infoId)
    .then((results) => {
      res.send(results);
    });
};
