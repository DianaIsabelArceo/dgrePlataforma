import React from 'react'
import './styles/CardPublicacion.css'
import perfil from '../images/perfil.jpg'
import eliminarpub from '../images/borrar.png'

const CardComentario=()=>(
                <div className="card border-success ">
                    <div className="card-header comentario">
                        <div className="circular--landscape_com">
                            <img src={perfil} alt="fotoperfil"/>
                        </div>
                        <h6 className="autordatospublicacion_com"> Diana Isabel Arceo Suarez</h6>
                            <button type="submit" className="botonespublicacion_com" value=""><img src={eliminarpub} width="20px" alt="eliminarpub"/></button>
                        <h6 className="datospublicacion_com"> 2020-10-24 14:55:00</h6>
                    </div>
                    <div className="card-body text-success">
                        <p className="card-text comentario">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

    
)
export default CardComentario
