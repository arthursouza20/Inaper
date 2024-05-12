import React from 'react';
import './Inicio.modules.css';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function Inicio() {

    return (
        <>
    {/* <a id='btn-backsite' class="btn btn-danger" href="https://inaper.org.br/">Voltar ao site</a> */}
        <div className="login">

            <main class="form-signin">

                    <img class="mb-4" src={Logo} alt="" width="90" />

                    <Link id='btn-loginadm-inicio' class="w-100 btn btn-lg btn-light" to="/login">Administrador</Link>
                    <Link id='btn-loginvolunteer-inicio' class="w-100 btn btn-lg btn-light" to="/loginVoluntario">Voluntário</Link>
                    <p class="mt-5 mb-3 text-muted">Inaper © 2024</p>

            </main>
        </div>
        </>

    );

}

export default Inicio;