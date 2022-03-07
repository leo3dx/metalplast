import React from 'react';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from '../assets/authConfig/authConfig.js';
import {Link} from 'react-router-dom';

const app = firebase.initializeApp(firebaseConfig);

const Encabezado = (props) => {
        const logout = ()=> {
            app.auth().signOut().then(()=>{
                console.log(app.auth().currentUser)
                window.location.href = "/"
            });
        }
        return ( 
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <h2 className="">{props.titulo}</h2>
                                <Link className="nav-link link text-black ms-3" to={props.opcion === "Crear Concecutivo"? "/funcionario":"/administrador"}>Dashboard</Link>
                                <Link className="nav-link link text-black" to={props.opcion === "Crear Concecutivo"? "/concecutivo":"/usuarios"}>{props.opcion}</Link>
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item dropdown">
                                        <Link to="#"
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        >
                                        {props.usuario}
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li>
                                                <Link className="dropdown-item" to="#" onClick={logout}>
                                                    Cerrar sesión
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </>
        );
}
export default Encabezado;