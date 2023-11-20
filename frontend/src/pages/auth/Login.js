import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import '../auth/login/css/style.css';

const Login = () => {
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
                    closeModal: true,
                },
            },
        });
    };

    const navegador = useNavigate();

    const [usuario, setUsuario] = useState({
        email: "",
        contra: "",
    });

    const { email, contra } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        document.getElementById("email").focus();
    }, []);

    const iniciarSesion = async () => {
        const data = {
            email: usuario.email,
            contra: usuario.contra,
        };
    
        try {
            const response = await APIInvoke.invokePOST("/usuarios/login", data);
    
            const acceso = response.mensaje;
    
            if (acceso === "Ingreso") {
                const idRol = response.idRol; // Extraer el ID del rol de la respuesta
                localStorage.setItem("user", response.usuario);
                
                // Redirigir según el rol
                if (idRol === "655a590e6d60ee6e6679f989") {
                    navegador("/cliente");
                } else if (idRol === "655adf8599290f27821f8ef8") {
                    navegador("/admin");
                } // Agrega más condiciones según tus roles
    
            } 
    
            setUsuario({
                email: "",
                contra: "",
            });
        } catch (error) {
            console.error(error);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    };

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                <div className="text w-100">
                                    <h2>Bienvenido a Mi Dulce Online</h2>
                                    <p>¿No tienes una cuenta?</p>
                                    <Link
                                        to="/registrar"
                                        className="btn btn-white btn-outline-white"
                                    >
                                        Registrate
                                    </Link>
                                </div>
                            </div>
                            <div className="login-wrap p-4 p-lg-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Iniciar Sesion</h3>
                                    </div>
                                </div>
                                <form
                                    onSubmit={onSubmit}
                                    className="signin-form"
                                >
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Correo"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                            required
                                        />
                                        <label
                                            className="label"
                                            htmlFor="floatingInput"
                                        >
                                            Correo
                                        </label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Contraseña"
                                            id="contra"
                                            name="contra"
                                            value={contra}
                                            onChange={onChange}
                                            required
                                        />
                                        <label
                                            className="label"
                                            htmlFor="floatingPassword"
                                        >
                                            Contraseña
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="form-control btn btn-primary submit px-3"
                                        >
                                            Iniciar Sesion
                                        </button>
                                        <Link to="/">Cancelar</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;