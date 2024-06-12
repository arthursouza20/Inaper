import React from "react";
import Logo from "../../assets/Logo.png";
import "./Header.modules.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/home">
              <img src={Logo} alt="" width="90" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/voluntarios">
                    Voluntários
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/servicos">
                    Serviços
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/atividades">
                    Atividades
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/acolhidos">
                    Acolhidos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/projetos">
                    Projetos
                  </Link>
                </li>
                <li class="nav-item me-2">
                  <Link class="nav-link" to="/login">
                    Sair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
