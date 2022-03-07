import React, { Component } from 'react';

class FuncionarioByConcecutivo extends Component {
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
            let concecutivos = data.filter(element => {
                return element.idUsuarios === Number(this.props.match.params.id)
            })
            this.setState({concecutivos : concecutivos})
        })
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.concecutivos.map(element => {
                                return (
                                    <tr key={element.id}>
                                        <td>{element.numeroConcecutivo >=1 && element.numeroConcecutivo < 10? "000"+element.numeroConcecutivo:
                                        element.numeroConcecutivo >=10 && element.numeroConcecutivo < 100? "00"+element.numeroConcecutivo:
                                        element.numeroConcecutivo >=100 && element.numeroConcecutivo < 1000? "0"+element.numeroConcecutivo:
                                        element.numeroConcecutivo}</td>
                                        <td>{element.descripcion}</td>
                                        <td>{element.fecha}</td>
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
export default FuncionarioByConcecutivo;