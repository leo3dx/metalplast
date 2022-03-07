import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            concecutivos: []
         }
    }
    
    componentDidMount() {
        fetch("http://localhost:3001/concecutivos")
        .then(response => response.json())
        .then(data => {
            let id = Number(localStorage.getItem('id'))
            let concecutivos = data.filter(function(element){
                return element.idUsuarios === id
            })
            this.setState({concecutivos: concecutivos})
        })
    }

    editar(id){
        this.props.history.push('/updateConcecutivo/'+id)
    }

    render() { 
        return ( 
            <>
                <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nro. Concecutivo</th>
                                <th>Descripción</th>
                                <th>Fecha de creación</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.concecutivos.map(element => {
                                return (
                                    <tr key={element.id}>
                                        <td>{element.numeroConcecutivo >=1 && element.numeroConcecutivo < 10? "000"+element.numeroConcecutivo:
                                        element.numeroConcecutivo >=10 && element.numeroConcecutivo < 100? "00"+element.numeroConcecutivo:
                                        element.numeroConcecutivo >=100 && element.numeroConcecutivo < 1000? "0"+element.numeroConcecutivo:
                                        element.numeroConcecutivo}</td>
                                        <td>{element.descripcion}</td>
                                        <td>{element.fecha}</td>
                                        <td><button onClick={this.editar.bind(this, element.id)} className="btn btn-warning">Modificar</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </>
        );
    }
}
export default Dashboard;