import React from 'react'
import './styles/ParticipantesLista.css'
import IconEliminar from '../images/eliminar.png'
import IconEditarParticipante from '../images/editarparticipante.png'
const ParticipantesLista=()=>(
        <React.Fragment>
        <div>
            <table className="tableparticipantes">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">1</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Diana Isabel Arceo Suarez</td>
                        <td>dianaisabel_arceo@ucol.mx</td>
                        <td>Alumno</td>
                        <td>
                        <button className="botonesacciones" type="submit" value=""><img src={IconEditarParticipante} 
                        alt="editar_participante"  data-toggle="modal" data-target="#modal_editarparticipante"/></button>
                        <button className="botonesacciones" type="submit" value=""><img src={IconEliminar} 
                        alt="eliminar_participante"/></button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>


        <div className="modal" tabIndex="-1" role="dialog" id="modal_editarparticipante">
                <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Editar Cargo Participante</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <form id="editarparticipante" action="" method="POST">
                                    <div className="form-group row">
                                        <div className="col-sm-12">
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
                                    <button type="submit" form="editarparticipante" className="btn btn-success btn-block" href="/inicio/grupos/grupo/participantes">Guardar Cambios</button>
                                </div>
                                </div>
                            </div>
        </div>
               </React.Fragment>         
)
export default ParticipantesLista