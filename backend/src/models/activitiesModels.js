const connection = require("./connection");

const getAll = async () => {
  const activities = await connection.execute(
    "SELECT a.*, v.nome as nome_voluntario, u.nome as nome_assistido FROM atividades a JOIN voluntarios v ON v.id = a.id_voluntario JOIN usuarios u ON u.id = a.id_assistido"
  );
  return activities[0];
};

const createActivity = async (activity) => {
  const { datetime, observacao, id_assistido, id_voluntario, servico } =
    activity;

  const query =
    "INSERT INTO atividades (datetime, observacao, id_assistido, id_voluntario, servico) VALUES (?, ?, ?, ?, ?)";

  const createdActivity = await connection.execute(query, [
    datetime,
    observacao,
    id_assistido,
    id_voluntario,
    servico,
  ]);

  return createdActivity[0];
};

const deleteActivity = async (activity) => {
  const id = activity.id;
  const query = "DELETE FROM atividades where id = ?";
  const deletedActivity = await connection.execute(query, [id]);
  return deletedActivity[0];
};

const editActivity = async (activity) => {
  const { datetime, observacao, id_assistido, id_voluntario, servico, id } =
    activity;
  const query = `UPDATE atividades SET datetime = ?, observacao = ?, id_assistido = ?, id_voluntario = ?, servico = ? WHERE id = ?;`;

  const updatedActivity = await connection.execute(query, [
    datetime,
    observacao,
    id_assistido,
    id_voluntario,
    servico,
    id,
  ]);

  return updatedActivity[0];
};

module.exports = {
  getAll,
  createActivity,
  deleteActivity,
  editActivity,
};
