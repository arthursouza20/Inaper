import { BrowserRouter, Route, Routes } from "react-router-dom";

// Rotas do Administrador
import Login from "./pages/Login";
import Home from "./pages/Home";
import Voluntarios from "./pages/Voluntarios";
import Atividades from "./pages/Atividades";
import Acolhidos from "./pages/Acolhidos";
import Projetos from "./pages/Projetos";
import Inicio from "./pages/Inicio";

// Rotas do Voluntário
import LoginVoluntario from "./pagesVoluntario/LoginVoluntario";
import Servicos from "./pages/Servicos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas do Administrador */}
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/voluntarios" element={<Voluntarios />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/atividades" element={<Atividades />} />
        <Route path="/acolhidos" element={<Acolhidos />} />
        <Route path="/projetos" element={<Projetos />} />

        {/* Rotas do Voluntário */}
        <Route path="/loginVoluntario" element={<LoginVoluntario />} />
        {/* <Route path="/voluntario" element={ <Voluntario /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
