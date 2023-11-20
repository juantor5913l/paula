import React from "react";
import { Link } from "react-router-dom";
import dulces from './assets/img/dulces.jpg';
const Index = () => {
    return (
      <div>
  <div>
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1>Mi Dulce Online<span>.</span></h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href ="#hero">Inicio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><Link to="/registrar">Registrate</Link></li>
            <li><Link to="/login">Iniciar Sesion</Link></li>
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
            <h2>Bienvenido a <span>Mi Dulce Online</span></h2>
            <h4>Encuentra una gran variedad de dulces Colombianos :3</h4>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to="/login" className="btn-get-started">Ordena Ahora</Link>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Nosotros</h2>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>Gran variedad de dulces colombianos</h3>
            <img src={dulces} className="img-fluid rounded-4 mb-4"/>
          </div>
          <div className="col-lg-6">
          <center> <div className="content ps-0 ps-lg-5">
              <ul>
                <li><i className="bi bi-check-circle-fill" /> En esta pagina podras encontrar todo tipo de dulces colombianos, </li>
                <li><i className="bi bi-check-circle-fill" /> de todas las regiones de colombia.</li>
                <li><i className="bi bi-check-circle-fill" /> nuestro objetivo es bridarte la mejor experiencia para que puedas probar </li>
                <li><i className="bi bi-check-circle-fill" /> de todos los dulces que esta hermosa tierra ofrece. </li>
              </ul>
            </div></center>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <a href="index.html" className="logo d-flex align-items-center">
            <span>Mi Dulce Online</span>
          </a>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Links Utiles</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            <strong>Telefono:</strong> +57 3102276950<br />
            <strong>Correo:</strong> midulceonline@outlook.com<br />
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="copyright">
        © Copyright <strong><span>MiDulceOnline</span></strong>. Derechos Reservados
      </div>
    </div>
  </footer>
</div>
    )
}

export default Index;