import React, { Component } from 'react';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from '../../assets/authConfig/authConfig';
import Menu from '../Menu.jsx';
import Encabezado from '../Encabezado.jsx';
import Registrarse from './Registrarse.jsx';
import Dashboard from './Dashboard.jsx';
import Usuarios from './Usuarios'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FuncionarioByConcecutivo from './FuncionarioByConcecutivo.jsx';

const app = firebase.initializeApp(firebaseConfig);

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        if (app.auth().currentUser) {
            return ( 
                <>
                    <Router>
                <div className="container-fluid m-0 p-0">
                    {/* Menu lateral */}
                    <div className="row m-0 p-0">
                    {/* <Menu opcion={"Usuarios"}/> */}
                    {/*Encabezado*/}
                        <div className="col">
                            <Encabezado usuario={localStorage.getItem('user')} titulo="
                            Administrador" opcion="Usuarios"/>
                            {/* Contenido */}
                            <Route path="/administrador" exact component={Dashboard}></Route>
                            <Route path="/usuarios" exact component={Usuarios}></Route>
                            <Route path="/createUser" exact component={Registrarse}></Route>
                            <Route path="/funcionarioByConcecutivo/:id" exact component={FuncionarioByConcecutivo}></Route>
                            {/* <Route path="/updateConcecutivo/:id" exact component={UpdateConcecutivo}></Route> */}
                        </div>
                    </div>
                </div>
                </Router>
                </>
            );
        }else{
            return window.location.href = "/"
        }
    }
}
 
export default Index;