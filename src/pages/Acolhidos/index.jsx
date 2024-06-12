import Header from "../../components/Header";
import { Axios } from "axios";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

function Acolhidos() {
  const getAcolhidos = () => {
    api.get("/users").then((r) => setAcolhidos(r.data));
  };

  const addAcolhido = (data) => {
    api.post("/users", data).then((r) => {
      getAcolhidos();
      addAcolhidoForm.reset();
    });
  };

  const editAcolhido = (data) => {
    api.put("/users", data).then((r) => getAcolhidos());
  };

  const deleteAcolhido = (data) => {
    api
      .delete("/users", {
        headers: { "Content-Type": "application/json;charset=utf-8" },
        data,
      })
      .then((r) => getAcolhidos());
  };

  useEffect(() => {
    getAcolhidos();
  }, []);

  const [acolhidos, setAcolhidos] = useState([]);
  const [userToEdit, setUserToEdit] = useState();

  const addAcolhidoForm = useForm();
  const editAcolhidoForm = useForm();

  const onSubmitEditAcolhido = async (data) => {
    await editAcolhido({ ...data, id: userToEdit.id });
  };

  const onSubmitAddAcolhido = async (data) => {
    await addAcolhido(data);
  };

  return (
    <>
      <Header />
      <main>
        <div class="">
          <h1>Acolhidos</h1>
          <p>
            Nesse menu você pode acompanhar os acolhidos cadastrados e tambem
            efetuar novos cadastros.
          </p>
          <br />
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalAddAcolhido"
          >
            Adicionar acolhido
          </button>
        </div>

        {/* Modal de adição de acolhido */}
        <div
          class="modal fade "
          id="modalAddAcolhido"
          tabindex="-1"
          aria-labelledby="modalAcolhidoLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalAcolhidoLabel">
                  Adicionar acolhido
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
                    <label for="nomeAcolhido" class="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nomeAcolhido"
                      class="form-control"
                      id="nomeAcolhido"
                      defaultValue=""
                      {...addAcolhidoForm.register("nome")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="identidadeAcolhido" class="form-label">
                      Identidade
                    </label>
                    <input
                      type="text"
                      name="identidadeAcolhido"
                      class="form-control"
                      id="identidadeAcolhido"
                      defaultValue=""
                      {...addAcolhidoForm.register("identidade")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="cod_identificacaoAcolhido" class="form-label">
                      Código de identificação
                    </label>
                    <input
                      type="text"
                      name="cod_identificacaoAcolhido"
                      class="form-control"
                      id="cod_identificacaoAcolhido"
                      {...addAcolhidoForm.register("cod_identificacao")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="telefoneAcolhido" class="form-label">
                      Telefone
                    </label>
                    <input
                      type="text"
                      name="telefoneAcolhido"
                      class="form-control"
                      id="telefoneAcolhido"
                      defaultValue=""
                      {...addAcolhidoForm.register("telefone")}
                    />
                  </div>
                  <button
                    onClick={addAcolhidoForm.handleSubmit(onSubmitAddAcolhido)}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAddAcolhido"
                  >
                    Adicionar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Fim Modal de adição de acolhido */}

        {/* Modal de edição de acolhido */}
        <div
          class="modal fade
                "
          id="modalEditAcolhido"
          tabindex="-1"
          aria-labelledby="modalAcolhidoLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalAcolhidoLabel">
                  Editar acolhido
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
                    <label for="nomeAcolhido" class="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nomeAcolhido"
                      class="form-control"
                      id="nomeAcolhido"
                      defaultValue=""
                      {...editAcolhidoForm.register("nome")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="identidadeAcolhido" class="form-label">
                      Identidade
                    </label>
                    <input
                      type="text"
                      name="identidadeAcolhido"
                      class="form-control"
                      id="identidadeAcolhido"
                      defaultValue=""
                      {...editAcolhidoForm.register("identidade")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="cod_identificacaoAcolhido" class="form-label">
                      Código de identificação
                    </label>
                    <input
                      type="text"
                      name="cod_identificacaoAcolhido"
                      class="form-control"
                      id="cod_identificacaoAcolhido"
                      {...editAcolhidoForm.register("cod_identificacao")}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="telefoneAcolhido" class="form-label">
                      Telefone
                    </label>
                    <input
                      type="text"
                      name="telefoneAcolhido"
                      class="form-control"
                      id="telefoneAcolhido"
                      defaultValue=""
                      {...editAcolhidoForm.register("telefone")}
                    />
                  </div>
                  <button
                    onClick={editAcolhidoForm.handleSubmit(
                      onSubmitEditAcolhido
                    )}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditAcolhido"
                  >
                    Editar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Fim Modal de edição de acolhido */}

        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Identidade</th>
                <th scope="col">Código de identificação</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {acolhidos.length > 0 ? (
                acolhidos.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.nome}</td>
                      <td>{item.identidade}</td>
                      <td>{item.cod_identificacao}</td>
                      <td>{item.telefone}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-warning"
                          onClick={() => {
                            setUserToEdit(item);
                            editAcolhidoForm.reset(item);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#modalEditAcolhido"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deleteAcolhido(item)}
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

export default Acolhidos;
