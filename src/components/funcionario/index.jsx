import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Menu from "../Menu.jsx";
import Encabezado from "../Encabezado.jsx";
import Concecutivo from './CrearConcecutivo.jsx';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from '../../assets/authConfig/authConfig.js';

const app = firebase.initializeApp(firebaseConfig);

const Index = (props) => {
    
    if(app.auth().currentUser){
        return (
            <>
                <Router>
                <div className="container-fluid m-0 p-0">
                    {/* Menu lateral */}
                    <div className="row m-0 p-0">
                    <Menu opcion={"Crear Concecutivo"}/>
                    {/*Encabezado*/}
                        <div className="col">
                            <Encabezado usuario="Leonardo Heredia" titulo="Funcionario"/>
                            {/* Contenido */}
                            <Route path="/funcionario" exact component={Dashboard}></Route>
                            <Route path="/concecutivo" exact component={Concecutivo}></Route>
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

export default Index;
