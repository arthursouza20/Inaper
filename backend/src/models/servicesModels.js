const connection = require("./connection");

const getAll = async () => {
  const services = await connection.execute("SELECT * FROM servicos");
  return services[0];
};

const createService = async (service) => {
  const { nome } = service;

  const query = "INSERT INTO servicos (nome) VALUES (?)";

  const createdServices = await connection.execute(query, [nome]);

  return createdServices[0];
};

const deleteService = async (service) => {
  const id = service.id_servico;
  const query = "DELETE FROM servicos where id_servico = ?";
  const deletedService = await connection.execute(query, [id]);
  return deletedService[0];
};

const editService = async (service) => {
  const { nome, id_servico } = service;
  const query = `UPDATE servicos SET nome = ? WHERE id_servico = ?;`;

  const updatedService = await connection.execute(query, [nome, id_servico]);

  return updatedService[0];
};

module.exports = {
  getAll,
  createService,
  deleteService,
  editService,
};
