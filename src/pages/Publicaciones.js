import React from 'react'
import NavegacionVertical from '../components/NavegacionVertical'
import NavegadorSecciones from '../components/NavegacionSecciones'
import PublicacionesLista from '../components/PublicacionesLista'
import BotonNuevaPublicacion from '../components/BotonNuevaPublicacion'
import '../components/styles/NavegacionVertical.css'

class Publicaciones extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavegacionVertical/>
                <NavegadorSecciones/>
                <PublicacionesLista/>
                <BotonNuevaPublicacion/>
            </React.Fragment>
        )
    }
}

export default Publicaciones