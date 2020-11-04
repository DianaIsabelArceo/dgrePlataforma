import React from 'react'
import AddDocumento from'../images/plus.png'
import './styles/CardDocumento.css'

class BotonNuevoDocumento extends React.Component{
    render(){
        return(
            <React.Fragment>
            <img className="addDocumento" src={AddDocumento} width="50" alt="nuevaPublicacion" data-toggle="modal" data-target="#modal_nuevodocumento"/>   
            
            <div className="modal" tabIndex="-1" role="dialog" id="modal_nuevodocumento">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Subir un documento</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form encType="multipart/form-data" action="" method="POST" id="nuevodocumento">
                                        <input  name="documento" type="file"  />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" form="nuevodocumento" className="btn btn-success btn-block" href="/inicio/grupos/grupo/documentos">Subir Documento</button>
                                </div>
                                </div>
                            </div>
                            </div>
               </React.Fragment>         
            )
    }
}
   
export default BotonNuevoDocumento