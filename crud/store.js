const Model = require('./model');

function getViajes(filter) {
  return new Promise((resolve, reject) => {
    let search = {};

    if (filter) {
      search.placa = new RegExp(filter, 'i');
    }

    Model.find(search)
      .sort({ date: -1 })
      // .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }

        resolve(populated);
    });

  });
}

async function postViaje(data) {
  const newViaje = new Model({
    ...data,
    date: new Date()
  });

  newViaje.save();

  return newViaje;
}

async function patchViaje(id, data) {
  const viaje = await Model.findById({
    _id: id
  });

  if (data.conductor) {
    viaje.conductor = data.conductor;
  }

  if (data.placa) {
    viaje.placa = data.placa;
  }

  if (data.origen) {
    viaje.origen = data.origen;
  }

  if (data.destino) {
    viaje.destino = data.destino;
  }

  viaje.edited = new Date();

  const newData = await viaje.save();
  return newData;
}

async function deleteViaje(id) {
  await Model.deleteOne({
    _id: id
  });
}

module.exports = {
  getViajes,
  postViaje,
  patchViaje,
  deleteViaje
}