import Header from "../../components/Header";
import { Axios } from "axios";




function Voluntarios() {

    const addVoluntario = (data) => {
        Axios.post("http://localhost:3001/create", {
            nome: data.nomeVoluntario,
            usuario: data.usuarioVoluntario,
            telefone: data.telefoneVoluntario,
            data_nascimento: data.dataNascVoluntario,
            funcao: data.funcaoVoluntario
        }).then((response) => {
            console.log(response);
        });
    }

    const editVoluntario = (data) => {
        Axios.put("http://localhost:3001/update", {
            nome: data.nomeVoluntario,
            usuario: data.usuarioVoluntario,
            telefone: data.telefoneVoluntario,
            data_nascimento: data.dataNascVoluntario,
            funcao: data.funcaoVoluntario
        }).then((response) => {
            console.log(response);
        });
    }

    // const deleteVoluntario = (e) => {
    //     e.preventDefault();
    //     Axios.delete(`http://localhost:3001/delete/${data.nomeVoluntario}`).then(() => {
    //         console.log("Dados excluídos com sucesso!");
    //     });
    // }


    return (
        <>
            <Header />
            <main>
                <div class="">
                    <h1>Voluntários</h1>
                    <p>Nesse menu você pode acompanhar os voluntários cadastrados, suas funções e tambem efetuar novos
                        cadastros.</p>
                    <br />
                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                        data-bs-target="#modalAddVoluntario">Adicionar voluntário</button>
                </div>

                {/* Modal de adição de voluntário */}
                <div class="modal fade " id="modalAddVoluntario" tabindex="-1" aria-labelledby="modalVoluntarioLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalVoluntarioLabel">Adicionar voluntário</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={addVoluntario}>
                                    <div class="mb-3">
                                        <label for="nomeVoluntario" class="form-label">Nome</label>
                                        <input type="text" name="nomeVoluntario" class="form-control" id="nomeVoluntario" onChange={valueInput} value={data.nomeVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="usuarioVoluntario" class="form-label">Usuário</label>
                                        <input type="text" name="usuarioVoluntario" class="form-control" id="usuarioVoluntario" onChange={valueInput} value={data.usuarioVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="telefoneVoluntario" class="form-label">Telefone</label>
                                        <input type="text" name="telefoneVoluntario" class="form-control" id="telefoneVoluntario" onChange={valueInput} value={data.telefoneVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="dataNascVoluntario" class="form-label">Data de nascimento</label>
                                        <input type="date" name="dataNascVoluntario" class="form-control" id="dataNascVoluntario" onChange={valueInput} value={data.dataNascVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="funcaoVoluntario" class="form-label">Atividade</label>
                                        <select class="form-control" name="funcaoVoluntario" id="" onChange={valueInput} value={data.funcaoVoluntario} required>
                                            <option selected value="0">--Selecione a Atividade--</option>
                                            <option value="Portaria">Portaria</option>
                                            <option value="Assist. Social">Assistente Social</option>
                                            <option value="Banho">Banho</option>
                                            <option value="Barbearia">Barbearia</option>
                                            <option value="Psicologo">Psicologo</option>
                                            <option value="Telecentro">Telecentro</option>
                                            <option value="Interno">Interno</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-success">Adicionar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fim Modal de adição de voluntário */}

                {/* Modal de edição de voluntário */}
                <div class="modal fade
                " id="modalEditVoluntario" tabindex="-1" aria-labelledby="modalVoluntarioLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalVoluntarioLabel">Editar voluntário</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body
                            ">
                                <form onSubmit={editVoluntario}>
                                    <div class="mb-3">
                                        <label for="nomeVoluntario" class="form-label">Nome</label>
                                        <input type="text" name="nomeVoluntario" class="form-control" id="nomeVoluntario" onChange={valueInput} value={data.nomeVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="usuarioVoluntario" class="form-label">Usuário</label>
                                        <input type="text" name="usuarioVoluntario" class="form-control" id="usuarioVoluntario" onChange={valueInput} value={data.usuarioVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="telefoneVoluntario" class="form-label">Telefone</label>
                                        <input type="text" name="telefoneVoluntario" class="form-control" id="telefoneVoluntario" onChange={valueInput} value={data.telefoneVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="dataNascVoluntario" class="form-label">Data de nascimento</label>
                                        <input type="date" name="dataNascVoluntario" class="form-control" id="dataNascVoluntario" onChange={valueInput} value={data.dataNascVoluntario}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="funcaoVoluntario" class="form-label">Atividade</label>
                                        <select class="form-control" name="funcaoVoluntario" id="" onChange={valueInput} value={data.funcaoVoluntario} required>
                                            <option selected value="0">--Selecione a Atividade--</option>
                                            <option value="Portaria">Portaria</option>
                                            <option value="Assist. Social">Assistente Social</option>
                                            <option value="Banho">Banho</option>
                                            <option value="Barbearia">Barbearia</option>
                                            <option value="Psicologo">Psicologo</option>
                                            <option value="Telecentro">Telecentro</option>
                                            <option value="Interno">Interno</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-success">Editar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fim Modal de edição de voluntário */}

                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Usuário</th>
                                <th scope="col">Função</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>João da Silva</td>
                                <td>joaosilva</td>
                                <td>Coordenador</td>
                                <td>
                                    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
                        data-bs-target="#modalEditVoluntario">Editar</button>
                                    <button type="button" class="btn btn-outline-danger">Bloquear</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Maria da Silva</td>
                                <td>mariasilva</td>
                                <td>Voluntário</td>
                                <td>
                                    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
                        data-bs-target="#modalEditVoluntario">Editar</button>
                                    <button type="button" class="btn btn-outline-danger">Bloquear</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            

        </>

    );
}

export default Voluntarios;