import React,{ Component} from 'react';
import dateformat from 'date-format';

class UpdateConcecutivo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                id: 0
            }
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/concecutivos")
        .then(response => response.json())
        .then(data => {
            let concecutivo = data.find(concecutivo =>{
                return concecutivo.id === Number(this.props.match.params.id)
            })
            this.setState({data:concecutivo})
            console.log(concecutivo)
        })
    }

    updateConcecutivo(e){
        e.preventDefault()
        let datos = {
            numeroConcecutivo : document.getElementById('numeroConcecutivo').value,
            descripcion : document.getElementById('descripcion').value,
        }
        console.log(datos)
        let id = Number(this.props.match.params.id)
        fetch(`http://localhost:3001/updateConcecutivo/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            alert("Concecutivo actualizado con exito")
            this.props.history.push('/funcionario')
        }).catch((err)=>{
            console.log(err)
        })

    }

    render() { 
        return ( 
            <>
            <form onSubmit={this.updateConcecutivo.bind(this)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="" className="form-label">
                                Numero de concecutivo
                            </label>
                            <input className="form-control" readOnly type="text" id="numeroConcecutivo" value={this.state.data.numeroConcecutivo >=1 && this.state.data.numeroConcecutivo < 10? "000"+this.state.data.numeroConcecutivo:
                                        this.state.data.numeroConcecutivo >=10 && this.state.data.numeroConcecutivo < 100? "00"+this.state.data.numeroConcecutivo:
                                        this.state.data.numeroConcecutivo >=100 && this.state.data.numeroConcecutivo < 1000? "0"+this.state.data.numeroConcecutivo:
                                        this.state.data.numeroConcecutivo} />
                        </div>
                        <div className="col">
                            <label htmlFor="" className="form-label">
                                Fecha de creación
                            </label>
                            <input type="datetime-local" readOnly value={this.state.data.fecha} className="form-control" id="fecha"/>
                        </div>
                        <div className="col-">
                            <label htmlFor="" className="form-label">
                                Descripción
                            </label>
                            <textarea name="" id="descripcion" cols="30" required rows="10" className="form-control" defaultValue={this.state.data.descripcion}></textarea>                        
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary mt-3" value="Crear concecutivo"/>
                    
                </form>
            </>
        );
    }
}
export default UpdateConcecutivo;