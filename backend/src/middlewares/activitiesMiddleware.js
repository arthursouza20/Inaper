const validateBody = (request, reponse, next) => {
  const { body } = request;

  console.log(body);

  if (
    !body.datetime === undefined ||
    !body.observacao === undefined ||
    !body.id_assistido === undefined ||
    !body.id_voluntario === undefined ||
    !body.servico === undefined
  ) {
    return reponse
      .status(400)
      .json({ message: "Campo não preenchido corretamente!" });
  }

  if (
    body.datetime === "" ||
    body.observacao === "" ||
    body.id_assistido === "" ||
    body.id_voluntario === "" ||
    body.servico === ""
  ) {
    return reponse.status(400).json({ message: "Campo não preenchido!" });
  }

  next();
};

module.exports = {
  validateBody,
};
