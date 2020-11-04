import React from 'react'
import CardGrupo from'./CardGrupo'
import './styles/CardGrupo.css'

const GruposLista=()=>

(     
    <React.Fragment>
            <h3 className="TituloPageGrupos">Mis Grupos<hr className="separador"/></h3>
            <div className="card-columns">
                <CardGrupo/>      
                <CardGrupo/>            
                <CardGrupo/>            
                <CardGrupo/>            
                <CardGrupo/>            
            </div>
        </React.Fragment>    
            
)
  
export default GruposLista
   