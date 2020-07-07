import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props){
        super(props);
        this.ciudadRef = React.createRef();
        this.paisRef = React.createRef();
    }

    buscarClima = (e)=>{
        e.preventDefault();
        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais : this.paisRef.current.value
        }
        
        this.props.datosConsulta(respuesta);
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text" ref={this.ciudadRef}/>
                                <label htmlFor="ciudad">Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select id="pais" ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un país</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="PE">Peru</option>
                                </select>
                                <label htmlFor="pais">Pais: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="BUSCAR..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formulario;