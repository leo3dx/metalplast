import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import firebaseConfig from '../assets/authConfig/authConfig.js';
import logo from '../assets/img/logo.jpeg';
import 'firebase/compat/auth';
import '../assets/style/style.css';

const app = firebase.initializeApp(firebaseConfig);
class Registrarse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles : [],
            typeIdentification: []
        }
    }

    componentWillMount() {
        fetch("http://localhost:3001/roles").then(response => response.json())
        .then(data => {
            this.setState({roles : data})
            console.log(this.state.roles)
        })
        
        fetch("http://localhost:3001/tipoIdentificaciones")
        .then(response => response.json())
        .then(data => {
            this.setState({typeIdentification: data})
        })
    }

    registraUsuario(e) {
        e.preventDefault()
        let data ={
            "firstName": document.getElementById("firstName").value,
            "lastName1": document.getElementById("lastName1").value,
            "lastName2": document.getElementById("lastName2").value,
            "typeIdentification": document.getElementById("typeIdentification").value,
            "identification": document.getElementById("identification").value,
            "role": document.getElementById("role").value,
            "email": document.getElementById("usuario").value,
            "phone": document.getElementById("phone").value,
            "addres": document.getElementById("addres").value
        }
            
        let password = document.getElementById("password").value;
        fetch("http://localhost:3001/usuariosByIdentification/"+data["identification"]).then(response => response.json())
        .then(datos => {
                if(datos[0].identification === data["identification"]){
                    document.getElementById("alert").className="alert alert-danger visible text-center";
                    document.getElementById("alert").innerHTML="Usuario existente";
                }  
        }).catch(err => {
            console.log(err, "Indetificación no encontrada")
            app.auth().createUserWithEmailAndPassword(data["email"], password)
            .then(() => {  
                console.log("Correo no existente")
                fetch("http://localhost:3001/createUser",{
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(() => {
                    document.getElementById("alert").className="alert alert-success visible text-center";
                    document.getElementById("alert").innerHTML="Usuario creado exitosamente";
                    console.log("Usuario creado")
                }).catch(error => {
                    console.log(error);
                })
            }).catch((err) => {
                console.log("Correo existente")
                document.getElementById("alert").className="alert alert-danger visible text-center";
                document.getElementById("alert").innerHTML="Usuario existente"
            })   
            
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <img className="rounded mx-auto d-block" src={logo} alt="" />
                    <div className="alert alert-danger invisible" id="alert" role="alert"></div>
                    <div className="login">
                        <form className="text-center" onSubmit={this.registraUsuario.bind(this)}>
                        <div className="row">
                            <div className="col">
                                {/* PRIMERO NOMBRE */}
                                <label className="control-label m-2" htmlFor="">Nombre completo</label>
                                <input required className="form-control" type="text" id="firstName" />
                            </div>
                            <div className="col">
                                {/* PRIMER APELLIDO */}
                                <label className="control-label m-2" htmlFor="">Primer apellido</label>
                                <input required className="form-control" type="text" id="lastName1" />
                            </div>
                            <div className="col">
                                {/* SEGUNDO APELLIDO */}
                                <label className="control-label m-2" htmlFor="">Segundo apellido</label>
                                <input required className="form-control" type="text" id="lastName2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* TIPO IDENTIFICACION */}
                                <label className="control-label m-2" htmlFor="">Tipo identificación</label>
                                <select name="" id="typeIdentification" className="form-control">
                                    <option value="">Seleccionar</option>
                                    {
                                        this.state.typeIdentification.map(identification => 
                                            <option key={identification.id} value={identification.id}>{identification.nombreIdentificacion}</option>    
                                        )
                                    }
                                </select>
                            </div>
                            <div className="col">
                                {/* NUMERO IDENTIFICACION */}
                                <label className="control-label m-2" htmlFor="">Numero identificación</label>
                                <input required className="form-control" type="text" id="identification" />
                            </div>
                            <div className="col">
                                {/* TELEFONO */}
                                <label className="control-label m-2" htmlFor="">Telefono</label>
                                <input required className="form-control" type="number" id="phone" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* DIRECCION */}
                                <label className="control-label m-2" htmlFor="">Dirección</label>
                                <input required className="form-control" type="text" id="addres" />
                            </div>
                            <div className="col">
                                {/* ROLE */}
                                <label className="control-label m-2" htmlFor="">Rol</label>
                                <select name="" className="form-control" id="role">
                                    <option value="">Seleccionar</option>
                                    {
                                        this.state.roles.map(role => 
                                            <option key={role.id} value={role.id}>{role.nombreRole}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="col">
                                {/* EMAIL */}
                                <label className="control-label m-2" htmlFor="">E-mail</label>
                                <input required className="form-control" type="email" id="usuario" />
                            </div>
                        </div>
                            {/* CONTRASEÑA */}
                            <label className="control-label m-2" htmlFor="">Contraseña</label>
                            <input required className="form-control" type="password" id="password" />
                            <input  className="btn btn-danger mt-3" type="submit" value="Crear usuario"/>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default Registrarse;