import Header from "../../components/Header";
import { Axios } from "axios";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

function Atividades() {
  const getAtividades = () => {
    api.get("/activities").then((r) => setAtividades(r.data));
  };

  const getVoluntarios = () => {
    api.get("/volunters").then((r) => setVoluntarios(r.data));
  };

  const getAcolhidos = () => {
    api.get("/users").then((r) => setAcolhidos(r.data));
  };

  const getServicos = () => {
    api.get("/services").then((r) => setServicos(r.data));
  };

  const addAtividade = (data) => {
    api.post("/activities", data).then((r) => {
      getAtividades();
      addAtividadeForm.reset();
    });
  };

  const editAtividade = (data) => {
    api.put("/activities", data).then((r) => getAtividades());
  };

  const deleteAtividade = (data) => {
    api
      .delete("/activities", {
        headers: { "Content-Type": "application/json;charset=utf-8" },
        data,
      })
      .then((r) => getAtividades());
  };

  useEffect(() => {
    getAtividades();
    getVoluntarios();
    getAcolhidos();
    getServicos();
  }, []);

  const [atividades, setAtividades] = useState([]);
  const [voluntarios, setVoluntarios] = useState([]);
  const [acolhidos, setAcolhidos] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [activityToEdit, setActivityToEdit] = useState();

  const addAtividadeForm = useForm();
  const editAtividadeForm = useForm();

  const onSubmitEditAtividade = async (data) => {
    await editAtividade({ ...data, id: activityToEdit.id });
  };

  const onSubmitAddAtividade = async (data) => {
    await addAtividade(data);
  };

  return (
    <>
      <Header />
      <main>
        <div class="">
          <h1>Atividades</h1>
          <p>Nesse menu você pode acompanhar as atividades cadastradas</p>
          <br />
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalAddAtividade"
          >
            Adicionar atividade
          </button>
        </div>

        {/* Modal de adição de atividade */}
        <div
          class="modal fade "
          id="modalAddAtividade"
          tabindex="-1"
          aria-labelledby="modalAtividadeLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalAtividadeLabel">
                  Adicionar atividade
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
                    <label for="id_assistidoAtividade" class="form-label">
                      Assistido
                    </label>
                    <select
                      class="form-control"
                      name="id_assistidoAtividade"
                      id=""
                      required
                      defaultValue=""
                      {...addAtividadeForm.register("id_assistido")}
                    >
                      <option selected value="">
                        --Selecione o assistido--
                      </option>
                      {acolhidos.map((item, index) => (
                        <option value={item.id}>{item.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="id_voluntarioAtividade" class="form-label">
                      Voluntario
                    </label>
                    <select
                      class="form-control"
                      name="id_voluntarioAtividade"
                      id=""
                      required
                      defaultValue=""
                      {...addAtividadeForm.register("id_voluntario")}
                    >
                      <option selected value="">
                        --Selecione o voluntário--
                      </option>
                      {voluntarios.map((item, index) => (
                        <option value={item.id}>{item.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="servicoAtividade" class="form-label">
                      Serviço
                    </label>
                    <select
                      class="form-control"
                      name="servicoAtividade"
                      id=""
                      required
                      defaultValue=""
                      {...addAtividadeForm.register("servico")}
                    >
                      <option selected value="0">
                        --Selecione o serviço--
                      </option>
                      {servicos.map((item, index) => (
                        <option value={item.nome}>{item.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="dataAtividade" class="form-label">
                      Data e hora da atividade
                    </label>
                    <input
                      type="datetime-local"
                      name="dataAtividade"
                      class="form-control"
                      id="dataAtividade"
                      {...addAtividadeForm.register("datetime")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="observacaoAtividade" class="form-label">
                      Observações
                    </label>
                    <input
                      type="text"
                      name="observacaoAtividade"
                      class="form-control"
                      id="observacaoAtividade"
                      {...addAtividadeForm.register("observacao")}
                    />
                  </div>
                  <button
                    onClick={addAtividadeForm.handleSubmit(
                      onSubmitAddAtividade
                    )}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAddAtividade"
                  >
                    Adicionar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Fim Modal de adição de atividade */}

        {/* Modal de edição de atividade */}
        <div
          class="modal fade
                "
          id="modalEditAtividade"
          tabindex="-1"
          aria-labelledby="modalAtividadeLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalAtividadeLabel">
                  Editar atividade
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
                    <label for="id_assistidoAtividade" class="form-label">
                      Assistido
                    </label>
                    <select
                      class="form-control"
                      name="id_assistidoAtividade"
                      id=""
                      required
                      defaultValue=""
                      {...editAtividadeForm.register("id_assistido")}
                    >
                      <option selected value="">
                        --Selecione o assistido--
                      </option>
                      {acolhidos.map((item, index) => (
                        <option value={item.id}>{item.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="id_voluntarioAtividade" class="form-label">
                      Voluntario
                    </label>
                    <select
                      class="form-control"
                      name="id_voluntarioAtividade"
                      id=""
                      required
                      defaultValue=""
                      {...editAtividadeForm.register("id_voluntario")}
                    >
                      <option selected value="">
                        --Selecione o voluntário--
                      </option>
                      {voluntarios.map((item, index) => (
                        <option value={item.id}>{item.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="servicoAtividade" class="form-label">
                      Serviço
                    </label>
                    <select
                      class="form-control"
                      name="servicoAtividade"
                      id=""
                      required
                      defaultValue=""
                      {...editAtividadeForm.register("servico")}
                    >
                      <option selected value="0">
                        --Selecione o serviço--
                      </option>
                      {servicos.map((item, index) => (
                        <option value={item.nome}>{item.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="dataAtividade" class="form-label">
                      Data e hora da atividade
                    </label>
                    <input
                      type="datetime-local"
                      name="dataAtividade"
                      class="form-control"
                      id="dataAtividade"
                      {...editAtividadeForm.register("datetime")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="observacaoAtividade" class="form-label">
                      Observações
                    </label>
                    <input
                      type="text"
                      name="observacaoAtividade"
                      class="form-control"
                      id="observacaoAtividade"
                      {...editAtividadeForm.register("observacao")}
                    />
                  </div>
                  <button
                    onClick={editAtividadeForm.handleSubmit(
                      onSubmitEditAtividade
                    )}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditAtividade"
                  >
                    Editar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Fim Modal de edição de atividade */}

        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Assistido</th>
                <th scope="col">Voluntário</th>
                <th scope="col">Serviço</th>
                <th scope="col">Data e hora da atividade</th>
                <th scope="col">Observações</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {atividades.length > 0 ? (
                atividades.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.nome_assistido}</td>
                      <td>{item.nome_voluntario}</td>
                      <td>{item.servico}</td>
                      <td>
                        {moment(item.datetime).format("DD/MM/YYYY HH:mm")}
                      </td>
                      <td>{item.observacao}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-warning"
                          onClick={() => {
                            setActivityToEdit(item);
                            console.log(item);
                            editAtividadeForm.reset({
                              ...item,
                              datetime: moment(item.datetime).format(
                                "YYYY-MM-DDTHH:mm"
                              ),
                            });
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#modalEditAtividade"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deleteAtividade(item)}
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

export default Atividades;
