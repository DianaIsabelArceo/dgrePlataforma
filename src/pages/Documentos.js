import React from 'react'
import NavegacionVertical from '../components/NavegacionVertical'
import NavegadorSecciones from '../components/NavegacionSecciones'
import DocumentosLista from '../components/DocumentosLista'
import '../components/styles/NavegacionVertical.css'
import BotonNuevoDocumento from '../components/BotonNuevoDocumento'
//import '../components/styles/CardDocumento.css'


class Grupo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavegacionVertical/>
                <NavegadorSecciones/>
                <DocumentosLista/>
                <BotonNuevoDocumento/>
            </React.Fragment>
        )
    }
}

export default Grupo                
/*<iframe className="visualizador" width="40%" height="60%" name="top">HOLa</iframe>*/
