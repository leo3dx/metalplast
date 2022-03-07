import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            funcionarios: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/usuarios")
        .then(response => response.json())
        .then(data => {
            let funcionarios = data.filter(user => {
                return user.role === 2
            })
            this.setState({funcionarios: funcionarios})
        })
    }
    render() { 
        return ( 
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>P. apellido</th>
                            <th>S. apellido</th>
                            <th>Concecutivos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.funcionarios.map(element => {
                                return (
                                    <tr key={element.id}>
                                        <td>{element.identification}</td>
                                        <td>{element.firstName}</td>
                                        <td>{element.lastName1}</td>
                                        <td>{element.lastName2}</td>
                                        <td><Link className="btn btn-warning" to={"/funcionarioByConcecutivo/"+element.id}>Ver</Link></td>
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
export default Dashboard;