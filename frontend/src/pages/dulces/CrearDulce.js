import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import '../auth/login/css/style.css';
import '../auth/assets/css/main.css'

const Creardulce = () => {
    const alerta = (mensaje, tipo, titulo) => {
        swal({
            title: titulo,
            text: mensaje,
            icon: tipo,
            buttons: {
                confirm: {
                    text: "Aceptar",
                    value: true,
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true
                }
            }
        });
    }

    const [dulce, setdulce] = useState({
        referencia: "",
        nombre: "",
        cantidad: "",
        precio: "",
        Descripcion: "",
        region: "",
        imagen: ""
    });

    const { referencia, nombre, cantidad, precio, Descripcion, region} = dulce;

    const onChange = (e) => {
        setdulce({
            ...dulce,
            [e.target.name]: e.target.value
        });
    }
    const onChangeRegion = (e) => {  // Nuevo evento para la región
        setdulce({
            ...dulce,
            region: e.target.value
        });
    }


    const handleImagenChange = (e) => {
        // Manejar la carga de la imagen
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setdulce({
                    ...dulce,
                    imagen: reader.result, // Almacenar la URL de la imagen
                });
            };

            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        document.getElementById("referencia").focus();
    }, []);

    const creardulce = async () => {
        const data = {
            referencia: dulce.referencia,
            nombre: dulce.nombre,
            cantidad: dulce.cantidad,
            precio: dulce.precio,
            Descripcion: dulce.Descripcion,
            region: dulce.region,
            imagen: dulce.imagen
        }

        const response = await APIInvoke.invokePOST("/dulces/new", data);
        const mensaje = response.mensaje;
        let msj, tipo, titulo;

        if (mensaje === "El dulce fue creado") {
            msj = "Dulce guardado correctamente";
            tipo = "success";
            titulo = "Proceso exitoso";
            alerta(msj, tipo, titulo);

            setdulce({
                referencia: "",
                nombre: "",
                cantidad: "",
                precio: "",
                Descripcion: "",
                region: "",
                imagen: "",
            });
        } else if (mensaje === "El dulce ya existe") {
            msj = "Existe un dulce con la misma referencia";
            tipo = "error";
            titulo = "No se pudo guardar";
            alerta(msj, tipo, titulo);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        creardulce();
    }

    return (
        <div>
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link to="/admin" className="logo d-flex align-items-center">
                        <h1>Mi Dulce Online<span>.</span></h1>
                    </Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/crear">Agregar Dulce</Link></li>
                            <li><Link to="/list">Listar Dulce</Link></li>
                            <li><Link to="/">Cerrar Sesion</Link></li>
                        </ul>
                    </nav>{/* .navbar */}
                </div>
            </header>
            <center> <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">

                            <div className="login-wrap p-4 p-lg-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Inserta un dulce</h3>
                                    </div>
                                </div>
                                <form onSubmit={onSubmit} className="signin-form">
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="referencia"
                                            placeholder="Referencia"
                                            name="referencia"
                                            value={referencia}
                                            onChange={onChange}
                                            required
                                        />
                                        <label className="label" htmlFor="floatingInput">
                                            Referencia
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            placeholder="Nombre"
                                            name="nombre"
                                            value={nombre}
                                            onChange={onChange}
                                            required
                                        />
                                        <label className="label" htmlFor="floatingInput">
                                            Nombre
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="cantidad"
                                            placeholder="Cantidad"
                                            name="cantidad"
                                            value={cantidad}
                                            onChange={onChange}
                                            required
                                        />
                                        <label className="label" htmlFor="floatingInput">
                                            Cantidad
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="precio"
                                            placeholder="Precio"
                                            name="precio"
                                            value={precio}
                                            onChange={onChange}
                                            required
                                        />
                                        <label className="label" htmlFor="floatingInput">
                                            Precio
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Descripcion"
                                            placeholder="Descripcion"
                                            name="Descripcion"
                                            value={Descripcion}
                                            onChange={onChange}
                                            required
                                        />
                                        <label className="label" htmlFor="floatingInput">
                                            Descripcion
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <select className="form-select"
                                        value={region}
                                        onChange={onChangeRegion}
                                     >
                                        <option>Seleccionar Region</option>
                                        <option value="andina">Region Andina</option>
                                        <option value="caribe">Region Caribe</option>
                                        <option value="pacifica">Region Pacifica</option>
                                        <option value="amazonica">Region Amazonica</option>
                                        <option value="orinoquia">Region Orinoquia</option>
                                        <option value="insular">Region Insular</option>
                                        
                                     </select>
                                        <label className="label" htmlFor="floatingInput">
                                            Region
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="file"
                                            id="imagen"
                                            name="imagen"
                                            onChange={handleImagenChange}
                                        />
                                        <label className="label" htmlFor="floatingInput">
                                            Imagen
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary submit px-3">
                                            Insertar Dulce
                                        </button>
                                        <Link to="/Home">Cancelar</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section></center>
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

export default Creardulce;
