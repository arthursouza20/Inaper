const connection = require('./connection')

const getAll = async () => {
    const volunters = await connection.execute('SELECT * FROM voluntario');
    return volunters[0];
}

const createVolunter = async (volunters) => {

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO voluntario (nome, usuario, telefone, data_Nascimento, funcao, dataCadastro) VALUES (?,?,?,?,?,?)';

    const CreatedVolunters = await connection.execute(query, ['Arthur Souza', 'arthursouza', '(31) 97127-1905', '20/11/2002', 'Portaria', dateUTC]);

    return CreatedVolunters[0];
}

module.exports = {
    getAll,
    createVolunter,
}