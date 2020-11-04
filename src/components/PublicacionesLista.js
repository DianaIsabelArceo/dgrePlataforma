import React from 'react'
import CardPublicacion from'./CardPublicacion'
import './styles/CardPublicacion.css'

const PublicacionesLista=()=>
(     
        <React.Fragment>
            <div className="cardpublicaciones">
                <CardPublicacion/>      
                <CardPublicacion/>            
                <CardPublicacion/>          
            </div>
        </React.Fragment>    
            
)
export default PublicacionesLista