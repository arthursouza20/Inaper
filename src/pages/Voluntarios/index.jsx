import Header from "../../components/Header";
import { Axios } from "axios";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

function Voluntarios() {
  const getVoluntarios = () => {
    api.get("/volunters").then((r) => setVoluntarios(r.data));
  };

  const addVoluntario = (data) => {
    api.post("/volunters", data).then((r) => {
      getVoluntarios();
      addVoluntarioForm.reset();
    });
  };

  const editVoluntario = (data) => {
    api.put("/volunters", data).then((r) => getVoluntarios());
  };

  const deleteVoluntario = (data) => {
    api
      .delete("/volunters", {
        headers: { "Content-Type": "application/json;charset=utf-8" },
        data,
      })
      .then((r) => getVoluntarios());
  };

  useEffect(() => {
    getVoluntarios();
  }, []);

  const [voluntarios, setVoluntarios] = useState([]);
  const [volunterToEdit, setVolunterToEdit] = useState();

  const addVoluntarioForm = useForm();
  const editVoluntarioForm = useForm();

  const onSubmitEditVoluntario = async (data) => {
    await editVoluntario({ ...data, id: volunterToEdit.id });
  };

  const onSubmitAddVoluntario = async (data) => {
    await addVoluntario(data);
  };

  return (
    <>
      <Header />
      <main>
        <div class="">
          <h1>Voluntários</h1>
          <p>
            Nesse menu você pode acompanhar os voluntários cadastrados, suas
            funções e tambem efetuar novos cadastros.
          </p>
          <br />
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalAddVoluntario"
          >
            Adicionar voluntário
          </button>
        </div>

        {/* Modal de adição de voluntário */}
        <div
          class="modal fade "
          id="modalAddVoluntario"
          tabindex="-1"
          aria-labelledby="modalVoluntarioLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalVoluntarioLabel">
                  Adicionar voluntário
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="nomeVoluntario" class="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nomeVoluntario"
                      class="form-control"
                      id="nomeVoluntario"
                      defaultValue=""
                      {...addVoluntarioForm.register("nome")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="usuarioVoluntario" class="form-label">
                      Usuário
                    </label>
                    <input
                      type="text"
                      name="usuarioVoluntario"
                      class="form-control"
                      id="usuarioVoluntario"
                      defaultValue=""
                      {...addVoluntarioForm.register("usuario")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="telefoneVoluntario" class="form-label">
                      Telefone
                    </label>
                    <input
                      type="text"
                      name="telefoneVoluntario"
                      class="form-control"
                      id="telefoneVoluntario"
                      defaultValue=""
                      {...addVoluntarioForm.register("telefone")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="dataNascVoluntario" class="form-label">
                      Data de nascimento
                    </label>
                    <input
                      type="date"
                      name="dataNascVoluntario"
                      class="form-control"
                      id="dataNascVoluntario"
                      {...addVoluntarioForm.register("data_Nascimento")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="funcaoVoluntario" class="form-label">
                      Atividade
                    </label>
                    <select
                      class="form-control"
                      name="funcaoVoluntario"
                      id=""
                      required
                      defaultValue=""
                      {...addVoluntarioForm.register("funcao")}
                    >
                      <option selected value="0">
                        --Selecione a Atividade--
                      </option>
                      <option value="Portaria">Portaria</option>
                      <option value="Assist. Social">Assistente Social</option>
                      <option value="Banho">Banho</option>
                      <option value="Barbearia">Barbearia</option>
                      <option value="Psicologo">Psicologo</option>
                      <option value="Telecentro">Telecentro</option>
                      <option value="Interno">Interno</option>
                    </select>
                  </div>
                  <button
                    onClick={addVoluntarioForm.handleSubmit(
                      onSubmitAddVoluntario
                    )}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAddVoluntario"
                  >
                    Adicionar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Fim Modal de adição de voluntário */}

        {/* Modal de edição de voluntário */}
        <div
          class="modal fade
                "
          id="modalEditVoluntario"
          tabindex="-1"
          aria-labelledby="modalVoluntarioLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalVoluntarioLabel">
                  Editar voluntário
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="modal-body
                            "
              >
                <form>
                  <div class="mb-3">
                    <label for="nomeVoluntario" class="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nomeVoluntario"
                      class="form-control"
                      id="nomeVoluntario"
                      {...editVoluntarioForm.register("nome")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="usuarioVoluntario" class="form-label">
                      Usuário
                    </label>
                    <input
                      type="text"
                      name="usuarioVoluntario"
                      class="form-control"
                      id="usuarioVoluntario"
                      {...editVoluntarioForm.register("usuario")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="telefoneVoluntario" class="form-label">
                      Telefone
                    </label>
                    <input
                      type="text"
                      name="telefoneVoluntario"
                      class="form-control"
                      id="telefoneVoluntario"
                      {...editVoluntarioForm.register("telefone")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="dataNascVoluntario" class="form-label">
                      Data de nascimento
                    </label>
                    <input
                      type="date"
                      name="dataNascVoluntario"
                      class="form-control"
                      id="dataNascVoluntario"
                      {...editVoluntarioForm.register("data_Nascimento")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="funcaoVoluntario" class="form-label">
                      Atividade
                    </label>
                    <select
                      class="form-control"
                      name="funcaoVoluntario"
                      id=""
                      required
                      {...editVoluntarioForm.register("funcao")}
                    >
                      <option value="0">--Selecione a Atividade--</option>
                      <option value="Portaria">Portaria</option>
                      <option value="Assistente Social">
                        Assistente Social
                      </option>
                      <option value="Banho">Banho</option>
                      <option value="Barbearia">Barbearia</option>
                      <option value="Psicologo">Psicologo</option>
                      <option value="Telecentro">Telecentro</option>
                      <option value="Interno">Interno</option>
                    </select>
                  </div>
                  <button
                    onClick={editVoluntarioForm.handleSubmit(
                      onSubmitEditVoluntario
                    )}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditVoluntario"
                  >
                    Editar
                  </button>
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
              {voluntarios.length > 0 ? (
                voluntarios.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.nome}</td>
                      <td>{item.usuario}</td>
                      <td>{item.funcao}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-warning"
                          onClick={() => {
                            setVolunterToEdit(item);
                            editVoluntarioForm.reset({
                              ...item,
                              data_Nascimento: moment(
                                item.data_Nascimento
                              ).format("YYYY-MM-DD"),
                            });
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#modalEditVoluntario"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deleteVoluntario(item)}
                          type="button"
                          class="btn btn-outline-danger"
                        >
                          Bloquear
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>Não há usuários no banco de dados</tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Voluntarios;
