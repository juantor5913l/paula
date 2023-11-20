import React from "react";
import { Link } from "react-router-dom";
import './auth/assets/css/main.css';

const Cliente = () =>{
    return(
        <div>
            <div>
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/admin" className="logo d-flex align-items-center">
          <h1>Mi Dulce Online<span>.</span></h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/perfil">Perfil</Link></li>
            <li><Link to="/">Cerrar Sesion</Link></li>
          </ul>
        </nav>
      </div>
    </header>

    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>Bienvenido Cliente</h2>
          </div>
        </div>
      </div>
      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-geo-alt" /></div>
                <h4 className="title"><Link to="/catalogo">Catalogo de dulces</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></div>
        </div>
    )
}

export default Cliente;
