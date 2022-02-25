import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <>
                <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nro</th>
                                <th>Nro. Consecutivo</th>
                                <th>Fecha de creación</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>12051</td>
                                <td>10/02/2022</td>
                                <td>Handle</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>12051</td>
                                <td>10/02/2022</td>
                                <td>Handle</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>12051</td>
                                <td>10/02/2022</td>
                                <td>Handle</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>12051</td>
                                <td>10/02/2022</td>
                                <td>Handle</td>
                            </tr>
                        </tbody>
                    </table>
            </>
        );
    }
}
export default Dashboard;