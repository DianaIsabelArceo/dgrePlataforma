import React from 'react'
import CardDocumento from'./CardDocumento'
import './styles/CardDocumento.css'

const GruposLista=()=>

(     
    <React.Fragment>
            <div className="card-columns documentos">
                <CardDocumento/>      
                <CardDocumento/> 
                <CardDocumento/>      
                <CardDocumento/> 
                <CardDocumento/>      
                <CardDocumento/>  
                <CardDocumento/>      
                <CardDocumento/>               
            </div>
        </React.Fragment>    
            
)
  
export default GruposLista