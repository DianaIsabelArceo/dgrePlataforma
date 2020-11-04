import React from 'react'
import AddParticipante from'../images/plus.png'
import './styles/ParticipantesLista.css'

class BotonNuevoParticipante extends React.Component{
    render(){
        return(
            <React.Fragment>
            <img className="addPublicacion" src={AddParticipante} width="50" alt="nuevaPublicacion" data-toggle="modal" data-target="#modal_nuevoparticipante"/>   
            
            <div className="modal" tabIndex="-1" role="dialog" id="modal_nuevoparticipante">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Añadir Nuevo Participante</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <form id="nuevoparticipante" action="" method="POST">
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <label>Correo:</label>
                                            <input type="text" className="form-control" name="descripcion" placeholder="Ingresa su correo electronico" />
                                            <label>Cargo:</label>
                                            <select class="custom-select" name="cargo">
                                                <option selected value="Alumno">Alumno</option>
                                                <option value="Coordinador">Coordinador</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" form="nuevoparticipante" className="btn btn-success btn-block" href="/inicio/grupos/grupo/participantes">Añadir</button>
                                </div>
                                </div>
                            </div>
                            </div>
               </React.Fragment>         
            )
    }
}
   
export default BotonNuevoParticipante