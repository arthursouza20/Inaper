const voluntersModel = require('../models/voluntersModels');

const getAll = async (_request,reponse) => {
    
    const volunters = await voluntersModel.getAll();
    reponse.status(200).json(volunters);
}

const createVolunter = async (request, reponse) => {
    const CreatedVolunters = await voluntersModel.createVolunter(request.body);

    // const dateUTC = new Date(Date.now()).toUTCString();
    // const { nome, usuario, telefone, data_Nascimento, funcao } = request.body;
    
    return reponse.status(201).json(CreatedVolunters);
}


module.exports = {
    getAll,
    createVolunter,
};