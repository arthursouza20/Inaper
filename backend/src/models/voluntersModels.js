const connection = require("./connection");

const getAll = async () => {
  const volunters = await connection.execute("SELECT * FROM voluntarios");
  return volunters[0];
};

const createVolunter = async (volunter) => {
  const dateUTC = new Date(Date.now())
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const { nome, usuario, telefone, data_Nascimento, funcao } = volunter;

  const query =
    "INSERT INTO voluntarios (nome, usuario, telefone, data_Nascimento, funcao, data_Criacao) VALUES (?,?,?,?,?,?)";

  const CreatedVolunters = await connection.execute(query, [
    nome,
    usuario,
    telefone,
    data_Nascimento,
    funcao,
    dateUTC,
  ]);

  return CreatedVolunters[0];
};

const deleteVolunter = async (volunter) => {
  const id = volunter.id;
  const query = "DELETE FROM voluntarios where id = ?";
  const deletedVolunter = await connection.execute(query, [id]);
  return deletedVolunter[0];
};

const editVolunter = async (volunter) => {
  const { nome, usuario, telefone, data_Nascimento, funcao, id } = volunter;
  const query = `UPDATE voluntarios
    SET nome = ?, usuario = ?, telefone = ?, data_Nascimento = ?, funcao = ?
    WHERE id = ?;`;

  const updatedVolunter = await connection.execute(query, [
    nome,
    usuario,
    telefone,
    data_Nascimento,
    funcao,
    id,
  ]);

  return updatedVolunter[0];
};

module.exports = {
  getAll,
  createVolunter,
  deleteVolunter,
  editVolunter,
};
