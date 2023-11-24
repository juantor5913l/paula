import React from "react";
import { Link } from "react-router-dom";
import './auth/assets/css/main.css'


const Admin = () => {
    const nombre = localStorage.getItem("nombre");
    const idUsuario = localStorage.getItem("user");
    if (idUsuario === null) {
        window.location.href = "/";
    }
    return (
<div>
    
  <div>
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/admin" className="logo d-flex align-items-center">
          <h1>Mi Dulce Online<span>.</span></h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/">Cerrar Sesion</Link></li>
          </ul>
        </nav>{/* .navbar */}
      </div>
    </header>{/* End Header */}
    {/* End Header */}
    {/* ======= Hero Section ======= */}
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>Bienvenido {nombre}</h2>
          </div>
        </div>
      </div>
      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-easel" /></div>
                <h4 className="title"><Link to="/crear">¿Quieres empezar a vender tus dulces? Hazlo aqui</Link></h4>
              </div>
            </div>{/*End Icon Box */}
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem" /></div>
                <h4 className="title"><Link to="/list">Ve los productos que estas vendiendo</Link></h4>
              </div>
            </div>{/*End Icon Box */}
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem" /></div>
                <h4 className="title"><Link to="/catalogo">Catalogo de dulces</Link></h4>
              </div>
            </div>{/*End Icon Box */}

          </div>
        </div>
      </div>
    </section></div>
  {/* End Hero Section */}

 
</div>

    );
}

export default Admin; 