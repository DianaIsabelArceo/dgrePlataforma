import React from 'react'
import './styles/CardGrupo.css'
import ImgGrupo from '../images/matematicas.jpg'
import eliminagrupo from '../images/borrar.png'


const CardGrupo=()=>(
            <div className="card" id="cartagrupo" >
                <img src={ImgGrupo} className="card-img-top" alt="grupoimg"/>
                <button className="botonespublicacion" type="submit" value=""><img src={eliminagrupo} alt="eliminargrupo"  /></button>
                <div className="card-body">
                    <h6 className="card-title">Simulación y calidad de servicio</h6>
                    <div className="text-nombre-profe">
                        <p className="card-text"> GUERRERO IBAÑEZ JUAN ANTONIO</p>
                    </div> 
                    <div>
                        <a type="button" href="/inicio/grupos/grupo/publicaciones" className="btn btn-success">Acceder</a>
                    </div>
                        <hr/>
                  
                </div> 
                
            </div>  
    
    
)
                
export default CardGrupo
