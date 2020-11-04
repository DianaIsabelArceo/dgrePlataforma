import React from 'react'
import AddPublicacion from'../images/plus.png'
import './styles/CardPublicacion.css'

class BotonApuntarme extends React.Component{
    render(){
        return(
            <React.Fragment>
            <img className="addPublicacion" src={AddPublicacion} width="50" alt="nuevaPublicacion" data-toggle="modal" data-target="#modal_nuevapublicacion"/>   
            
            <div className="modal" tabIndex="-1" role="dialog" id="modal_nuevapublicacion">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">CREAR PUBLICACION</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <form id="nuevapublicacion" action="" method="POST">
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                        <textarea type="text" className="form-control publicacion" name="descripcion" placeholder="¿Que estás pensando?" />
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" form="nuevapublicacion" className="btn btn-success btn-block" href="/inicio/grupos/grupo/publicaciones">Publicar</button>
                                </div>
                                </div>
                            </div>
                            </div>
               </React.Fragment>         
            )
    }
}
   
export default BotonApuntarme