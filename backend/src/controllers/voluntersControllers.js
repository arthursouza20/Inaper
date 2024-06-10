const voluntersModel = require("../models/voluntersModels");

const getAll = async (request, response) => {
  const volunters = await voluntersModel.getAll();
  response.status(200).json(volunters);
};

const createVolunter = async (request, reponse) => {
  const CreatedVolunters = await voluntersModel.createVolunter(request.body);

  return reponse.status(201).json(CreatedVolunters);
};

const deleteVolunter = async (request, reponse) => {
  const deletedVolunter = await voluntersModel.deleteVolunter(request.body);

  return reponse.status(201).json(deletedVolunter);
};

const editVolunter = async (request, reponse) => {
  const updatedVolunter = await voluntersModel.editVolunter(request.body);

  return reponse.status(201).json(updatedVolunter);
};

module.exports = {
  getAll,
  createVolunter,
  deleteVolunter,
  editVolunter,
};
