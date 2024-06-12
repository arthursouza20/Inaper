const validateBody = (request, reponse, next) => {
  const { body } = request;

  console.log(body);

  if (
    !body.nome === undefined ||
    !body.identidade === undefined ||
    !body.cod_identificacao === undefined ||
    !body.telefone === undefined
  ) {
    return reponse
      .status(400)
      .json({ message: "Campo não preenchido corretamente!" });
  }

  if (
    body.nome === "" ||
    body.identidade === "" ||
    body.cod_identificacao === "" ||
    body.telefone === ""
  ) {
    return reponse.status(400).json({ message: "Campo não preenchido!" });
  }

  next();
};

module.exports = {
  validateBody,
};
