const validateBody = (request, reponse, next) => {
  const { body } = request;

  console.log(body);

  if (!body.nome === undefined) {
    return reponse
      .status(400)
      .json({ message: "Campo não preenchido corretamente!" });
  }

  if (body.nome === "") {
    return reponse.status(400).json({ message: "Campo não preenchido!" });
  }

  next();
};

module.exports = {
  validateBody,
};
