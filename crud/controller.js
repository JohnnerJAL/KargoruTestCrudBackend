const store = require('./store');

function getViaje(filter) {
  return new Promise((resolve, reject) => {
    resolve(store.getViajes(filter));
  });
}

function postViaje(body) {
  return new Promise((resolve, reject) => {
    if (!body.conductor || !body.placa || !body.origen || !body.destino) {
      reject('Invalid data');
    }

    resolve(store.postViaje(body));
  });
}

function patchViaje(id, data) {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject('Invalid data');
    }

    resolve(store.patchViaje(id, data));
  });
}

function deleteViaje(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid data');
    }

    resolve(store.deleteViaje(id));
  });
}

module.exports = {
  getViaje,
  postViaje,
  patchViaje,
  deleteViaje
}