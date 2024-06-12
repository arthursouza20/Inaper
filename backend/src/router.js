const express = require("express");

const voluntersControllers = require("./controllers/voluntersControllers");
const voluntersMiddleware = require("./middlewares/voluntersMiddleware");

const servicesControllers = require("./controllers/servicesControllers");
const servicesMiddleware = require("./middlewares/servicesMiddleware");

const usersControllers = require("./controllers/usersControllers");
const usersMiddleware = require("./middlewares/usersMiddleware");

const router = express.Router();

router.get("/volunters", voluntersControllers.getAll); // Rota para buscar todos os voluntários

router.post(
  "/volunters",
  voluntersMiddleware.validateBody,
  voluntersControllers.createVolunter
); // Rota para criar um novo voluntário

router.delete(
  "/volunters",
  voluntersMiddleware.validateBody,
  voluntersControllers.deleteVolunter
); // Rota para excluir um voluntário

router.put(
  "/volunters",
  voluntersMiddleware.validateBody,
  voluntersControllers.editVolunter
); // Rota para editar um voluntário

router.get("/services", servicesControllers.getAll); // Rota para buscar todos os serviços

router.post(
  "/services",
  servicesMiddleware.validateBody,
  servicesControllers.createService
); // Rota para criar um novo serviço

router.delete(
  "/services",
  servicesMiddleware.validateBody,
  servicesControllers.deleteService
); // Rota para excluir um serviço

router.put(
  "/services",
  servicesMiddleware.validateBody,
  servicesControllers.editService
); // Rota para editar um serviço

router.get("/users", usersControllers.getAll); // Rota para buscar todos os serviços

router.post(
  "/users",
  usersMiddleware.validateBody,
  usersControllers.createUser
); // Rota para criar um novo serviço

router.delete(
  "/users",
  usersMiddleware.validateBody,
  usersControllers.deleteUser
); // Rota para excluir um serviço

router.put("/users", usersMiddleware.validateBody, usersControllers.editUser); // Rota para editar um serviço

module.exports = router;
