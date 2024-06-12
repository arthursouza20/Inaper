const servicesModel = require("../models/servicesModels");

const getAll = async (request, response) => {
  const services = await servicesModel.getAll();
  response.status(200).json(services);
};

const createService = async (request, reponse) => {
  const createdServices = await servicesModel.createService(request.body);

  return reponse.status(201).json(createdServices);
};

const deleteService = async (request, reponse) => {
  const deletedService = await servicesModel.deleteService(request.body);

  return reponse.status(201).json(deletedService);
};

const editService = async (request, reponse) => {
  const updatedService = await servicesModel.editService(request.body);

  return reponse.status(201).json(updatedService);
};

module.exports = {
  getAll,
  createService,
  deleteService,
  editService,
};
