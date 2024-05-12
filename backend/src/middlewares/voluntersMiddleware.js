const validateBody = (request, reponse, next) => {
    const{body} = request;
    
    if(!body.nome === undefined || !body.usuario === undefined || !body.funcao === undefined){
        return reponse.status(400).json({message: 'Campo não preenchido corretamente!'});
    }

    if(!body.nome === '' || !body.usuario === '' || !body.funcao === ''){
        return reponse.status(400).json({message: 'Campo não preenchido!'});
    }

    next();

}

module.exports = {
    validateBody,
}