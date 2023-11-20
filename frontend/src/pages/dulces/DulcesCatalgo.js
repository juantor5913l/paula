/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
const DulcesCatalogo = () => {
    const compraExitosa = () => {
        swal({
            title: "Compra",
            text: "Se realizo la compra de forma exitosa",
            icon: "success",
            buttons: {
                confirm: {
                    text: "Aceptar",
                    value: true,
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true
                }
            }
        })
    }
    const [dulces, setdulces] = useState([]);

    const cargardulces = async () => {
        const response = await APIInvoke.invokeGET("/dulces/list");
        console.log(response);
        setdulces(response);
    }

    useEffect(() => {
        cargardulces();
    }, [])
    return (
        <div>
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link to="/Home" className="logo d-flex align-items-center">
                        <h1>Mi Dulce Online<span>.</span></h1>
                    </Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/perfil">Perfil</Link></li>
                            <li><Link to="/cliente">Atras</Link></li>
                            <li><Link to="/">Cerrar Sesion</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>

                <section class="py-5 text-center container">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">Catalogo de dulces disponibles</h1>
                        </div>
                    </div>
                </section>

                <div class="album py-5 bg-light">
                    <div class="container">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                            {dulces.map(
                                item =>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <div>
                                                <img src={item.imagen} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" />
                                            </div>


                                            <div class="card-body">
                                                <p class="card-text">{item.nombre}</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button
                                                            class="btn btn-sm btn-outline-secondary"
                                                            onClick={(e) => compraExitosa()}
                                                        >Comprar</button>
                                                    </div>
                                                    <small class="text-muted">Precio ${item.precio}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/admin" className="logo d-flex align-items-center">
                                <span>Mi Dulce Online</span>
                            </a>
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

    );
}
export default DulcesCatalogo;