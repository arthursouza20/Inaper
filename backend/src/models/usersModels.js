const connection = require("./connection");

const getAll = async () => {
  const users = await connection.execute("SELECT * FROM usuarios");
  return users[0];
};

const createUser = async (user) => {
  const { nome, identidade, cod_identificacao, telefone } = user;

  const query =
    "INSERT INTO usuarios (nome, identidade, cod_identificacao, telefone) VALUES (?,?,?,?)";

  const createdUsers = await connection.execute(query, [
    nome,
    identidade,
    cod_identificacao,
    telefone,
  ]);

  return createdUsers[0];
};

const deleteUser = async (user) => {
  const id = user.id;
  const query = "DELETE FROM usuarios where id = ?";
  const deletedUser = await connection.execute(query, [id]);
  return deletedUser[0];
};

const editUser = async (user) => {
  const { nome, identidade, cod_identificacao, telefone, id } = user;
  const query = `UPDATE usuarios
    SET nome = ?, identidade = ?, cod_identificacao = ?, telefone = ?
    WHERE id = ?;`;

  const updatedUser = await connection.execute(query, [
    nome,
    identidade,
    cod_identificacao,
    telefone,
    id,
  ]);

  return updatedUser[0];
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  editUser,
};
