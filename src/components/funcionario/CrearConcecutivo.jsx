import React, { Component } from 'react';

class CrearConcecutivo extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    createConcecutivo(){
        // let numeroConcecutivo = document.getElementById('numeroConcecutivo').value;
        // let descripcion = document.getElementById('descripcion').value;
        // let fecha = document.getElementById('fecha').value;
    }
    render() { 
        return ( 
            <>
                <form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="" className="form-label">
                                Numero de concecutivo
                            </label>
                            <input className="form-control" type="text" id="numeroConcecutivo" />
                        </div>
                        <div className="col">
                            <label htmlFor="" className="form-label">
                                Fecha de creación
                            </label>
                            <input type="datetime" className="form-control" id="fecha"/>
                        </div>
                        <div className="col-">
                            <label htmlFor="" className="form-label">
                                Descripción
                            </label>
                            <textarea name="" id="descripcion" cols="30" rows="10" className="form-control"></textarea>                        
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary mt-3" value="Crear concecutivo"/>
                    
                </form>
            </>
        );
    }
}
export default CrearConcecutivo;