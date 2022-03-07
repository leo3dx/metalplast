import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/img/Imagen3.png";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <>
                <div className="col-1 menu">
                    <img src={logo} alt="" width="100%"/>
                    <nav className="navbar row text-center">
                        <Link className="nav-link link fs-4 text-black" to={this.props.opcion === "Crear Concecutivo"? "/funcionario":"/administrador"}>
                        Dashboard
                        </Link>
                        <Link className="nav-link link fs-4 text-black" to={this.props.opcion === "Crear Concecutivo"? "/concecutivo":"/usuarios"}>
                        {this.props.opcion}
                        </Link>
                    </nav>
                </div>
            </>
        );
    }
}
export default Menu;