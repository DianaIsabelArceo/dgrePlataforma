import React from 'react'
import AddGrupo from'../images/plus.png'
import './styles/CardGrupo.css' 

class BotonApuntarme extends React.Component{
    render(){
        return(
            <React.Fragment>
            <img className="AddGrupo" src={AddGrupo} width="80" alt="Apuntarme" data-toggle="modal" data-target="#modal_apuntarme"/>   
            
            <div className="modal" tabIndex="-1" role="dialog" id="modal_apuntarme">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">APUNTARME A GRUPO</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <form id="apuntarme" action="" method="POST">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Código:</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" name="codigo" id="codigo" placeholder="Ingresa el Código del Grupo" />
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" form="apuntarme" className="btn btn-success btn-block" href="/inicio/grupos">Apuntarme</button>
                                </div>
                                </div>
                            </div>
                            </div>
               </React.Fragment>         
            )
    }
}
   
export default BotonApuntarme