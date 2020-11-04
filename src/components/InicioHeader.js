import React from 'react';
import LogoImg from '../images/logo.png'


const InicioHeader=()=> (
           <nav className="navbar navbar-expand-lg navbar-light bg-white">   
                <div className="collapse navbar-collapse" id="navbarNav">
                    <img src={LogoImg} width="240" height="75" className="d-inline-block align-top" alt=""/>
                    <ul className="navbar-nav">
                        <li className="nav-item  px-4">
                            <a className="nav-link h5" href="/inicio">Inicio</a>
                        </li>
                        <li className="nav-item  px-4">
                            <a className="nav-link h5" href="/quienessomos">¿Quienes somos?</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    export default InicioHeader