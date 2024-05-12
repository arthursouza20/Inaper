import Header from "../../components/Header";

function Projetos() {
    return (
        <>
            <Header />
            <h1>Projetos</h1>
            {/* <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div> */}

<main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Projetos</h1>
                </div>
                <div>
                    <p>Neste menu fica listado todos os projetos que a Inaper pratica. Para você verificar cada projeto, é só clicar no projeto que deseja entrar.</p>
                </div>
                <div class="col">
                    <p>Para adicionar um novo projeto, clique no botão abaixo.</p>
                    <button type="button" class="btn btn-primary">Adicionar Projeto</button>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Doação</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Saber mais</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Oficinas</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </>

    );
}

export default Projetos;