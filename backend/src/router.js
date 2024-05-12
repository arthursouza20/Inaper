const express = require('express');
const voluntersControllers = require('./controllers/voluntersControllers');
const voluntersMiddleware = require('./middlewares/voluntersMiddleware');

const router = express.Router();

router.get('/volunters', voluntersControllers.getAll); // Rota para buscar todos os voluntários
router.post('/volunters', voluntersMiddleware.validateBody, voluntersControllers.createVolunter); // Rota para criar um novo voluntário

module.exports = router;