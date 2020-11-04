import React from 'react'
import './styles/NavegacionSecciones.css'


class NavegacionSecciones extends React.Component{
    render(){
        return(
            <div className="navegacionsecciones">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="/inicio/grupos/grupo/publicaciones"><h5 className="font-weight-light ns">Publicaciones</h5></a>
                    </li>
                    <li className="nav-item">
                        <h5 className="font-weight-light ns">|</h5>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/inicio/grupos/grupo/documentos"><h5 className="font-weight-light ns">Documentos</h5></a>
                    </li>
                    <li className="nav-item">
                        <h5 className="font-weight-light ns">|</h5>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/inicio/grupos/grupo/participantes"><h5 className="font-weight-light ns">Participantes</h5></a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default NavegacionSecciones