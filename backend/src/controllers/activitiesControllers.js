const activitiesModel = require("../models/activitiesModels");

const getAll = async (request, response) => {
  const activities = await activitiesModel.getAll();
  response.status(200).json(activities);
};

const createActivity = async (request, reponse) => {
  const createdActivity = await activitiesModel.createActivity(request.body);

  return reponse.status(201).json(createdActivity);
};

const deleteActivity = async (request, reponse) => {
  const deletedActivity = await activitiesModel.deleteActivity(request.body);

  return reponse.status(201).json(deletedActivity);
};

const editActivity = async (request, reponse) => {
  const updatedActivity = await activitiesModel.editActivity(request.body);

  return reponse.status(201).json(updatedActivity);
};

module.exports = {
  getAll,
  createActivity,
  deleteActivity,
  editActivity,
};
