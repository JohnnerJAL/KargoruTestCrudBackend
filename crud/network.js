const router = require('express').Router();
const controller = require('./controller');
const response = require('../response');

router.get('/', (req, res, next) => {
    const filter = req.query.placa || null;
    controller.getViaje(filter)
        .then(list => response.success(req, res, list, 200))
        .catch(next);
});

router.post('/', (req, res, next) => {
    controller.postViaje(req.body)
        .then(data => response.success(req, res, data, 200))
        .catch(next);
});

router.patch('/:id', (req, res, next) => {
    controller.patchViaje(req.params.id, req.body)
      .then(data => response.success(req, res, data, 200))
      .catch(next);
});

router.delete('/:id', (req, res, next) => {
    controller.deleteViaje(req.params.id)
        .then(data => response.success(req, res, data, 200))
        .catch(next);
});

module.exports = router;