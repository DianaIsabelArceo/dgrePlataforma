import React from 'react'
import NavegacionVertical from '../components/NavegacionVertical'
import NavegadorSecciones from '../components/NavegacionSecciones'
import ParticipantesLista from '../components/ParticipantesLista'
import BotonNuevoParticipante from '../components/BotonNuevoParticipante'

class Participantes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavegacionVertical/>
                <NavegadorSecciones/>
                <ParticipantesLista/>
                <BotonNuevoParticipante/>
            </React.Fragment>    
        )
    }

}
export default Participantes