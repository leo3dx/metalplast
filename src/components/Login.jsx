import React from 'react';
import {Link, useHistory} from "react-router-dom";
import firebase from 'firebase/compat/app';
import logo from '../assets/img/logo.jpeg';
import 'firebase/compat/auth';
import '../assets/style/style.css';
import firebaseConfig from '../assets/authConfig/authConfig.js';

const app = firebase.initializeApp(firebaseConfig);
const Login = (props) => {
    const history = useHistory();
    const login = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        app.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            fetch("http://localhost:3001/usuarios")
            .then(response => response.json())
            .then(data => {
                data.map(user => {
                    if (user.email === email && user.role === 1) {
                        localStorage.setItem("user", user.firstName)
                        localStorage.setItem("id", user.id)
                        return history.push("/administrador")
                    }else if(user.email === email && user.role === 2){
                        localStorage.setItem("user", user.firstName)
                        localStorage.setItem("id", user.id)
                        return history.push("/funcionario")
                    }
                })
            })
        }).catch(err => {
            console.error(err)
        })
        
    }
        return ( 
            <>
                <div className="container">
                    <img className="rounded mx-auto d-block" src={logo} alt="" />
                    <div className="alert alert-danger invisible" id="alert" role="alert"></div>
                    <div className="login">
                        <form className="text-center" onSubmit={login}>
                            <label className="control-label m-2" htmlFor="">E-mail</label>
                            <input className="form-control" type="email" id="email" />
                            <label className="control-label m-2" htmlFor="">Contraseña</label>
                            <input className="form-control" type="password" id="password" />
                            <input className="btn btn-danger mt-3" type="submit" value="Ingresar"/>
                        </form>
                    </div>
                </div>
            </>
        );
}
export default Login;