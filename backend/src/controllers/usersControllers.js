const usersModel = require("../models/usersModels");

const getAll = async (request, response) => {
  const users = await usersModel.getAll();
  response.status(200).json(users);
};

const createUser = async (request, reponse) => {
  const createdUsers = await usersModel.createUser(request.body);

  return reponse.status(201).json(createdUsers);
};

const deleteUser = async (request, reponse) => {
  const deletedUser = await usersModel.deleteUser(request.body);

  return reponse.status(201).json(deletedUser);
};

const editUser = async (request, reponse) => {
  const updatedUser = await usersModel.editUser(request.body);

  return reponse.status(201).json(updatedUser);
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  editUser,
};
