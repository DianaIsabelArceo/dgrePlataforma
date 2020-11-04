import React from 'react'
import './styles/CardPublicacion.css'
import perfil from '../images/perfil.jpg'
import editarpub from '../images/editar.png'
import eliminarpub from '../images/borrar.png'
import CardComentario from './CardComentario'


//var from_nombre="efrenmanuel_hernandez@ucol.mx";
var mio='hola'
const CardPublicacion=()=>(
    <React.Fragment>
        <div className="card" id="cartapublicacion">
            <div className="card-header">
                <div className="circular--landscape">
                        <img src={perfil} alt="fotoperfil"/>
                </div>
                <div className="info">
                <h6 className="autordatospublicacion"> <strong> Autor:</strong> Diana Isabel Arceo Suarez</h6>
                {/* eslint-disable no-self-compare */}
                {from_correo === from_correo ? showbuttonspub():""}
                <h6 className="datospublicacion"> 2020-10-24 14:55:00</h6></div>
            </div>
            <div className="card-body text-black">
                    <p className="card-text publicacion">Some quick example text to build on the card title and make up the bulk of the card's content.
                    example text to build on the card title and make up the bulk of the card's content.</p>
                    <br/>
                    <form action="" method="POST">
                        <div className="input-group com">
                            <textarea className="form-control comentario" name="comentario" placeholder="Escribe un comentario" required></textarea>
                        </div>
                        <div className="comentar">
                            <button className="btn btn-outline-success com" type="submit">Comentar</button>
                        </div>
                    </form>
                    <div className="VerComentarios">
                        <button className="btn btn-secondary btn-sm" type="button" data-toggle="collapse" 
                        data-target={"#"+mio} aria-expanded="false" 
                        aria-controls="multiCollapseExample2">Ver Comentarios</button>
                    </div>
                    <div className="collapse multi-collapse" id={mio}>
                        <CardComentario/>
                    </div>
                   
            </div>
        </div>   
            <div className="modal" tabIndex="-1" role="dialog" id="modal_editarpubllicacion">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">EDITAR PUBLICACION</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <form id="editarpubl" action="" method="POST">
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <textarea type="text" className="form-control publicacion" name="descripcion"/>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" form="editarpublic" className="btn btn-success btn-block" href="/inicio/grupos/grupo/publicaciones">Guardar</button>
                                </div>
                                </div>
                            </div>
            </div>
    </React.Fragment>         
        
)
var from_correo="dianaisabel_arceo@ucol.mx";
let showbuttonspub=()=> {
    return(
        <div>
            <button type="submit" className="botonespublicacion" value=""><img src={eliminarpub} alt="eliminarpub"  /></button>
            <button type="submit" className="botonespublicacion" value=""><img src={editarpub} alt="editarpub"  data-toggle="modal" data-target="#modal_editarpubllicacion"/></button>
        </div>)
}

       
export default CardPublicacion