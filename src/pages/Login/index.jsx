import React from 'react';
import './Login.modules.css';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function Login() {

    function onsubmit(e) {
        e.preventDefault();
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;
        if (email === '' || password === '') {
            alert('Preencha todos os campos');
            return;
        }
        if (email === 'adm@inaper.org.br' && password === 'adm@inaper.org.br') {
            alert('Login efetuado com sucesso');
            window.location.href = '/home';
        } else {
            alert('E-mail ou senha incorretos');
        }
    }


    return (
        <>
    <Link id='btn-backsite' class="btn btn-danger" to="/">Voltar ao inicio</Link>
        <div className="login">

            <main class="form-signin">
                <form>
                    <img class="mb-4" src={Logo} alt="" width="90" />
                    <h1 class="h3 mb-3 fw-normal">Administrador</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">E-mail</label>
                    </div>
                    <br />
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Senha</label>
                    </div>

                    <div id='remember' class="checkbox mb-3">
                        <label>
                            <input className='remember' type="checkbox" value="remember-me" /> Lembrar-me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-success" type="submit" onClick={onsubmit}>Acessar</button>
                    <Link id='btn-loginvolunteer' class="w-100 btn btn-lg btn-light" to="/loginVoluntario">Voluntário</Link>
                    <p class="mt-5 mb-3 text-muted">Inaper © 2024</p>

                </form>
            </main>
        </div>
        </>

    );
}

export default Login;
