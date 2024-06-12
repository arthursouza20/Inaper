import Header from "../../components/Header";
import { Axios } from "axios";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

function Servicos() {
  const getServicos = () => {
    api.get("/services").then((r) => setServicos(r.data));
  };

  const addServico = (data) => {
    api.post("/services", data).then((r) => {
      getServicos();
      addServicoForm.reset();
    });
  };

  const editServico = (data) => {
    api.put("/services", data).then((r) => getServicos());
  };

  const deleteServico = (data) => {
    api
      .delete("/services", {
        headers: { "Content-Type": "application/json;charset=utf-8" },
        data,
      })
      .then((r) => getServicos());
  };

  useEffect(() => {
    getServicos();
  }, []);

  const [servicos, setServicos] = useState([]);
  const [serviceToEdit, setServiceToEdit] = useState();

  const addServicoForm = useForm();
  const editServicoForm = useForm();

  const onSubmitEditServico = async (data) => {
    await editServico({ ...data, id_servico: serviceToEdit.id_servico });
  };

  const onSubmitAddServico = async (data) => {
    await addServico(data);
  };

  return (
    <>
      <Header />
      <main>
        <div class="">
          <h1>Serviços</h1>
          <p>
            Nesse menu você pode gerenciar os serviços cadastrados no sistema
          </p>
          <br />
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalAddServico"
          >
            Adicionar serviço
          </button>
        </div>

        {/* Modal de adição de serviço */}
        <div
          class="modal fade "
          id="modalAddServico"
          tabindex="-1"
          aria-labelledby="modalServicoLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalServicoLabel">
                  Adicionar serviço
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
                    <label for="nomeServico" class="form-label">
                      Nome do serviço
                    </label>
                    <input
                      type="text"
                      name="nomeServico"
                      class="form-control"
                      id="nomeServico"
                      defaultValue=""
                      {...addServicoForm.register("nome")}
                    />
                  </div>
                  <button
                    onClick={addServicoForm.handleSubmit(onSubmitAddServico)}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAddServico"
                  >
                    Adicionar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Fim Modal de adição de serviço */}

        {/* Modal de edição de serviço */}
        <div
          class="modal fade
                "
          id="modalEditServico"
          tabindex="-1"
          aria-labelledby="modalServicoLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalServicoLabel">
                  Editar serviço
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
                    <label for="nomeServico" class="form-label">
                      Nome do serviço
                    </label>
                    <input
                      type="text"
                      name="nomeServico"
                      class="form-control"
                      id="nomeServico"
                      defaultValue=""
                      {...editServicoForm.register("nome")}
                    />
                  </div>
                  <button
                    onClick={editServicoForm.handleSubmit(onSubmitEditServico)}
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditServico"
                  >
                    Editar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Fim Modal de edição de serviço */}

        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {servicos.length > 0 ? (
                servicos.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.nome}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-warning"
                          onClick={() => {
                            setServiceToEdit(item);
                            editServicoForm.reset(item);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#modalEditServico"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deleteServico(item)}
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
                <tr>Não há serviços no banco de dados</tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Servicos;
