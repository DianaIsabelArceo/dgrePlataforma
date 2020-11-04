import React from 'react'
import './styles/NavegacionVertical.css'
//import ImgPerfil from '../images/perfil.jpg'
import IconGrupo from '../images/grupo.png'
import IconNuevoGrupo from '../images/nuevogrupo.png'
import IconCerrarSesionGrupo from '../images/flecha.png'
import IconEditarPerfil from '../images/editarperfil.png'
import perfil from '../images/perfil.jpg'

class NavegacionVertical extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ul className="nav flex-column">
                <img id="editarperfil"src={perfil} width="160" height="160" className="rounded-circle" alt="ImgPerfil"/>      
                    <h5 className="font-weight-light titulo"> Hi Friend </h5>
                    <hr/>
                    
                <li className="nav-item nv">
                    <a className="nav-link" href="/inicio/grupos" data-toggle="modal" data-target="#modal_editarperfil"><h5 className="font-weight-light nv"><img src={IconEditarPerfil} alt="IconNuevoGrupo"/>  Editar Perfil</h5></a>
                </li>
                <li className="nav-item nv">
                    <a className="nav-link" href="/inicio/grupos"><h5 className="font-weight-light nv"><img src={IconGrupo} alt="IconGrupo"/> Grupos</h5></a>
                </li>
                <li className="nav-item nv">
                    <a className="nav-link" href="/inicio/grupos" data-toggle="modal" data-target="#modal_nuevogrupo"><h5 className="font-weight-light nv"><img src={IconNuevoGrupo} alt="IconNuevoGrupo"/>  Nuevo Grupo</h5></a>
                </li>
                <li className="" id="Cerrar_NavVertical">
                    <a className="nav-link" href="/inicio"><h5 className="font-weight-light nv"><img src={IconCerrarSesionGrupo} alt="IconNuevoGrupo"/> Cerrar Sesión</h5></a>
                </li>
            </ul>
            
            <div className="modal" tabIndex="-1" role="dialog" id="modal_nuevogrupo">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">CREAR NUEVO GRUPO</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form id="nuevogrupo" method="POST">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Foto de Grupo:</label>
                                    <input  name="fotogrupo" type="file"  />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nombre:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="nombregrupo" id="nombregrupo" placeholder="Nombre del Grupo" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nombre de Coordinador:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="nombrecoordinador" id="nombrecoordinador" placeholder="Nombre del Coordinador" />
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" form="nuevogrupo" className="btn btn-success btn-block" href="/inicio/grupos">Crear</button>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="modal" tabIndex="-1" role="dialog" id="modal_editarperfil">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Foto de Perfil</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form encType="multipart/form-data" action="" method="POST" id="editarperfil">
                                <input  name="subirfotoperfil" type="file"  />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" form="editarperfil" className="btn btn-success btn-block">Subir Foto</button>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}

export default NavegacionVertical
