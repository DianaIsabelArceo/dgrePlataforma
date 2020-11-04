import React from 'react'
import './styles/CardDocumento.css'
import IconDoc from '../images/documento.png'
import descargar from '../images/descargar.png'
import eliminardoc from '../images/borrar.png'

const CardDocumento=()=>(
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={IconDoc} alt="IconDoc" width="70" />
                </div>
                <div className="col-md-8">
                    <div className="card-body doc">
                    <button className="botonesdoc" type="submit" value=""><img src={eliminardoc}  width="16" alt="eliminardoc"/></button>
                    <p className="card-text documento"><em>Diana Isabel Arceo suarez.</em></p>
                        <p className="card-text documento"><strong>TASK2_ArceoDiana.pdf</strong></p>
                        <p className="card-text documento"><small className="text-muted">2020/10/25 08:41</small></p>
                        <a className="card-text documento" href="http://localhost:3000/TASK2_ArceoDiana.pdf"  target="_blank" rel="noopener noreferrer" >
                            <img src={descargar} alt="icon_descarga"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      
)
export default CardDocumento
/*<div  id="cartadocumento">
<img src={IconDoc} alt="IconDoc" width="50" height="50" />
<div className="card-body documento">
    <p className="card-text ">nombre del documentoooo.</p>
<a href="http://localhost:3000/TASK2_ArceoDiana.pdf" download="nombrearchivo" target="_blank">
<button className="btn btn-success"> Descargar</button>    
</a>
</div>
</div>*/


