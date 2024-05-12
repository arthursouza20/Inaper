import React from 'react';
import './LogVolunt.modules.css';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function LoginVoluntario() {

    function onsubmit(e) {
        e.preventDefault();
        const username = document.getElementById('floatingInput').value;
        if (username === '') {
            alert('Preencha o campo');
            return;
        }
        if (username === 'voluntarioInaper') {
            alert('Login efetuado com sucesso');
            window.location.href = '/home';
        } else {
            alert('Usuário incorreto');
        }
    }


    return (
        <>
            <Link id='btn-backsite' class="btn btn-danger" to="/">Voltar ao inicio</Link>

            <div className="login">

                <main class="form-signin">
                    <form>
                        <img class="mb-4" src={Logo} alt="" width="90" />
                        <h1 class="h3 mb-3 fw-normal">Voluntário</h1>

                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Usuário</label>
                        </div>

                        <div id='remember' class="checkbox mb-3">
                            <label>
                                <input className='remember' type="checkbox" value="remember-me" /> Lembrar-me
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-success" type="submit" onClick={onsubmit}>Acessar</button>
                        <Link id='btn-loginadm' class="w-100 btn btn-lg btn-light" to="/login">Administrador</Link>
                        <p class="mt-5 mb-3 text-muted">Inaper © 2024</p>
                    </form>
                </main>
            </div>
        </>

    );
}

export default LoginVoluntario;
