import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      error: false,
      consulta: {},
      resultado: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.consulta !== this.state.consulta)
      this.consultarApi();
  }
  
  consultarApi = ()=>{
    const {ciudad,pais} = this.state.consulta;
    
    if(!ciudad || !pais) return null;
    
    const appId = '4f041c1f24736360cd55cb55d9d23bcf';
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
    
    fetch(url).then(respuesta =>{
      return respuesta.json();
    }).then(datos =>{
      this.setState({
        resultado: datos
      });
    }).catch(error =>{
      console.log(error)
    });
  }

  datosConsulta = (datos)=>{
    
    if(datos.ciudad === '' || datos.pais ===''){
      this.setState({
        error : true
      });

    }else{
      this.setState({
        error : false,
        consulta: datos
      });
    } 
  }

  render() {
    const error = this.state.error;
    let resultado;
    if(error){
      resultado = <Error mensaje="Ambos campos son obligatorios"/>;
    }else{
      resultado = <Clima resultado ={this.state.resultado}/>
    }

    return (
      <div className="app">
        <Header
          titulo = "Clima React"
        />
        <Formulario
          datosConsulta = {this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;