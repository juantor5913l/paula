import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Admin from "./pages/Admin";
import Cliente from "./pages/Cliente";
import ListaDulces from "./pages/dulces/ListaDulces";
import CrearDulce from "./pages/dulces/CrearDulce";
import ActualizarDulce from "./pages/dulces/ActualizarDulce"; 
import DulcesCatalogo from "./pages/dulces/DulcesCatalgo";
import Index from "./pages/auth/index";
import Perfil from "./pages/auth/Perfil";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login/>} />
          <Route path="/" exact element={<Index/>} />
          <Route path="/registrar" exact element={<CrearCuenta/>}/>
          <Route path="/admin" exact element={<Admin/>}/>
          <Route path="/cliente" exact element={<Cliente/>}/>
          <Route path="/perfil" exact element={<Perfil/>}/>
          <Route path="/list" exact element={<ListaDulces/>}/>
          <Route path="/crear" exact element={<CrearDulce/>} />
          <Route path="/actualizar/:id" exact element={<ActualizarDulce/>} />
          <Route path="/catalogo/" exact element={<DulcesCatalogo/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
