const validateBody = (request, reponse, next) => {
  const { body } = request;

  console.log(body);

  if (
    !body.nome === undefined ||
    !body.usuario === undefined ||
    !body.funcao === undefined ||
    !body.telefone === undefined ||
    !body.data_Nascimento === undefined
  ) {
    return reponse
      .status(400)
      .json({ message: "Campo não preenchido corretamente!" });
  }

  if (
    body.nome === "" ||
    body.usuario === "" ||
    body.funcao === "" ||
    body.telefone === "" ||
    body.data_Nascimento === ""
  ) {
    return reponse.status(400).json({ message: "Campo não preenchido!" });
  }

  next();
};

module.exports = {
  validateBody,
};
