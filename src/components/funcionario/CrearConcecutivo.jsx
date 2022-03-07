import React, { Component } from 'react';
import dateformat from 'date-format';

class CrearConcecutivo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stringConcecutivo : ''
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/concecutivos")
        .then((response) => response.json())
        .then(data => {
            if((data[data.length -1].numeroConcecutivo) !== null){
                console.log(data[data.length -1].numeroConcecutivo)
                if(data[data.length -1].numeroConcecutivo >= 1 && data[data.length -1].numeroConcecutivo < 10){
                    this.setState({ stringConcecutivo: '000'+(data[data.length -1].numeroConcecutivo+1)})
                }else if(data[data.length -1].numeroConcecutivo >= 10 && data[data.length -1].numeroConcecutivo < 100){
                    this.setState({ stringConcecutivo: '00'+(data[data.length -1].numeroConcecutivo+1)})
                }else if(data[data.length -1].numeroConcecutivo >= 100 && data[data.length -1].numeroConcecutivo < 1000){
                    this.setState({ stringConcecutivo: '0'+(data[data.length -1].numeroConcecutivo+1)})
                }else{
                    this.setState({ stringConcecutivo: (data[data.length -1].numeroConcecutivo+1)})
                }
            }else{
                this.setState({stringConcecutivo: '0001'})
            }
        })
    }

    createConcecutivo(e){
        e.preventDefault()
        let data = {
            numeroConcecutivo : document.getElementById('numeroConcecutivo').value,
            idUsuarios : localStorage.getItem('id'),
            descripcion : document.getElementById('descripcion').value,
            fecha : document.getElementById('fecha').value
        }
        fetch("http://localhost:3001/createConcecutivo",{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(()=> {
            alert("Concecutivo creado exitosamente")
            this.props.history.push('/funcionario')
        }).catch(err=> {
            console.log(err)
        })
    }
    render() { 
        return ( 
            <>
                <form onSubmit={this.createConcecutivo.bind(this)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="" className="form-label">
                                Numero de concecutivo
                            </label>
                            <input className="form-control" readOnly type="text" id="numeroConcecutivo" value={this.state.stringConcecutivo} />
                        </div>
                        <div className="col">
                            <label htmlFor="" className="form-label">
                                Fecha de creación
                            </label>
                            <input type="datetime-local" readOnly value={dateformat(new Date())} className="form-control" id="fecha"/>
                        </div>
                        <div className="col-">
                            <label htmlFor="" className="form-label">
                                Descripción
                            </label>
                            <textarea name="" id="descripcion" cols="30" required rows="10" className="form-control"></textarea>                        
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary mt-3" value="Crear concecutivo"/>
                    
                </form>
            </>
        );
    }
}
export default CrearConcecutivo;