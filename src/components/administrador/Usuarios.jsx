import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'firebase/compat/auth';
import firebaseConfig from '../../assets/authConfig/authConfig.js';
import firebase from 'firebase/compat/app';

const app = firebase.initializeApp(firebaseConfig)

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuarios : [],
            roles:[]
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/usuarios")
        .then(response => response.json())
        .then(data  => {
            this.setState({ usuarios: data})
        })

        fetch("http://localhost:3001/roles")
        .then(response => response.json())
        .then(data => {
            this.setState({ roles: data})
        })
    }
    deleteUser(id,email){
        fetch("http://localhost:3001/deleteUser/"+id,{
            method: "DELETE"
        }).then(() => {
            alert("Usuario eliminado con exito")
            this.cargarUsuarios()
        }).catch(err =>{
            console.log(err)
        })
    }
    cargarUsuarios(){
        fetch("http://localhost:3001/usuarios")
        .then(response => response.json())
        .then(data  => {
            this.setState({ usuarios: data})
        })
    }
    render() { 
        
        return ( 
            <>
                <Link to="createUser" className="btn btn-success">Agregar usuario</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>P. Apellido</th>
                            <th>S. Apellido</th>
                            <th>Rol</th>
                            <th>Tel.</th>
                            <th>Direc.</th>
                            <th>Email</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usuarios.map(element => {
                                return (
                                    <tr key={element.id}>
                                        <td>{element.identification}</td>
                                        <td>{element.firstName}</td>
                                        <td>{element.lastName1}</td>
                                        <td>{element.lastName2}</td>
                                        <td>{element.role === 1?"Administrador":"Funcionario"}</td>
                                        <td>{element.phone}</td>
                                        <td>{element.addres}</td>
                                        <td>{element.email}</td>
                                        <td>
                                            <button className="btn btn-warning m-2">Editar</button>
                                            <button className="btn btn-danger" onClick={this.deleteUser.bind(this,Number(element.id),String(element.email))}>Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        );
    }
}
export default Usuarios;